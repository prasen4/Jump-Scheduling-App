import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID!;
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET!;
const LINKEDIN_REDIRECT_URI = 'http://localhost:3000/api/linkedin/callback';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.redirect(new URL('/dashboard?error=unauthorized', process.env.NEXTAUTH_URL!));
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  if (!code) {
    return NextResponse.redirect(new URL('/dashboard?error=linkedin_auth_failed', process.env.NEXTAUTH_URL!));
  }

  try {
    // Log the redirect URI for debugging
    console.log('Callback using LinkedIn Redirect URI:', LINKEDIN_REDIRECT_URI);
    
    // Exchange code for access token
    const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: LINKEDIN_CLIENT_ID,
        client_secret: LINKEDIN_CLIENT_SECRET,
        redirect_uri: LINKEDIN_REDIRECT_URI,
      }).toString(),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('LinkedIn token error response:', errorData);
      throw new Error('Failed to get access token');
    }

    const tokenData = await tokenResponse.json();

    // Get user profile using the userinfo endpoint
    const profileResponse = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
      },
    });

    if (!profileResponse.ok) {
      const errorData = await profileResponse.text();
      console.error('LinkedIn profile error response:', errorData);
      throw new Error('Failed to get LinkedIn profile');
    }

    const profileData = await profileResponse.json();
    const providerAccountId = profileData.sub;

    try {
      // Try to create a new account
      await prisma.account.create({
        data: {
          userId: session.user.id,
          type: 'oauth',
          provider: 'linkedin',
          providerAccountId,
          access_token: tokenData.access_token,
          expires_at: Math.floor(Date.now() / 1000) + tokenData.expires_in,
          token_type: tokenData.token_type,
          scope: 'openid profile email',
          id_token: tokenData.id_token,
        },
      });
    } catch (error: any) {
      // If the error is a unique constraint violation, update the existing account
      if (error?.code === 'P2002') {
        await prisma.account.update({
          where: {
            provider_providerAccountId: {
              provider: 'linkedin',
              providerAccountId,
            },
          },
          data: {
            access_token: tokenData.access_token,
            expires_at: Math.floor(Date.now() / 1000) + tokenData.expires_in,
            token_type: tokenData.token_type,
            scope: 'openid profile email',
            id_token: tokenData.id_token,
          },
        });
      } else {
        throw error;
      }
    }

    return NextResponse.redirect(new URL('/dashboard?success=linkedin_connected', process.env.NEXTAUTH_URL!));
  } catch (error) {
    console.error('Error connecting LinkedIn:', error);
    return NextResponse.redirect(new URL('/dashboard?error=linkedin_auth_failed', process.env.NEXTAUTH_URL!));
  }
} 