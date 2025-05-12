import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

const HUBSPOT_CLIENT_ID = process.env.HUBSPOT_CLIENT_ID!;
const HUBSPOT_CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET!;
const HUBSPOT_REDIRECT_URI = process.env.NEXTAUTH_URL + '/api/hubspot/callback';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.redirect(new URL('/dashboard?error=unauthorized', process.env.NEXTAUTH_URL!));
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(new URL('/dashboard?error=hubspot_auth_failed', process.env.NEXTAUTH_URL!));
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://api.hubapi.com/oauth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: HUBSPOT_CLIENT_ID,
        client_secret: HUBSPOT_CLIENT_SECRET,
        redirect_uri: HUBSPOT_REDIRECT_URI,
        code,
      }).toString(),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('HubSpot token error:', errorData);
      throw new Error('Failed to get access token');
    }

    const tokenData = await tokenResponse.json();
    console.log('HubSpot token response:', {
      hasAccessToken: !!tokenData.access_token,
      hasRefreshToken: !!tokenData.refresh_token,
      scope: tokenData.scope,
      expiresIn: tokenData.expires_in
    });

    const providerAccountId = tokenData.user_id?.toString() || 'unknown';

    // If no scope is provided in the response, use the requested scopes
    const scope = tokenData.scope || 'crm.objects.contacts.read crm.objects.contacts.write';

    try {
      // Try to create a new account
      await prisma.account.create({
        data: {
          userId: session.user.id,
          type: 'oauth',
          provider: 'hubspot',
          providerAccountId,
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: Math.floor(Date.now() / 1000) + tokenData.expires_in,
          token_type: tokenData.token_type,
          scope: scope,
        },
      });
    } catch (error: any) {
      // If the error is a unique constraint violation, update the existing account
      if (error?.code === 'P2002') {
        await prisma.account.update({
          where: {
            provider_providerAccountId: {
              provider: 'hubspot',
              providerAccountId,
            },
          },
          data: {
            access_token: tokenData.access_token,
            refresh_token: tokenData.refresh_token,
            expires_at: Math.floor(Date.now() / 1000) + tokenData.expires_in,
            token_type: tokenData.token_type,
            scope: scope,
          },
        });
      } else {
        throw error;
      }
    }

    return NextResponse.redirect(new URL('/dashboard?success=hubspot_connected', process.env.NEXTAUTH_URL!));
  } catch (error) {
    console.error('Error connecting HubSpot:', error);
    return NextResponse.redirect(new URL('/dashboard?error=hubspot_auth_failed', process.env.NEXTAUTH_URL!));
  }
} 