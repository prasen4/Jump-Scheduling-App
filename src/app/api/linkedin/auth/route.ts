import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID!;
const LINKEDIN_REDIRECT_URI = 'http://localhost:3000/api/linkedin/callback';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const state = Math.random().toString(36).substring(7);
  
  // Log the redirect URI for debugging
  console.log('Using LinkedIn Redirect URI:', LINKEDIN_REDIRECT_URI);
  
  const linkedinAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?` +
    `response_type=code` +
    `&client_id=${encodeURIComponent(LINKEDIN_CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(LINKEDIN_REDIRECT_URI)}` +
    `&state=${state}` +
    `&scope=openid%20profile%20email`;

  // Log the full auth URL for debugging
  console.log('Full LinkedIn Auth URL:', linkedinAuthUrl);

  return NextResponse.json({ authUrl: linkedinAuthUrl });
} 