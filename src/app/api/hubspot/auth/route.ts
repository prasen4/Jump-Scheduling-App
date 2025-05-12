import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const HUBSPOT_CLIENT_ID = process.env.HUBSPOT_CLIENT_ID!;
const HUBSPOT_REDIRECT_URI = process.env.NEXTAUTH_URL + '/api/hubspot/callback';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const scopes = [
    'crm.objects.contacts.read',
    'crm.objects.contacts.write'
  ].join(' ');

  const hubspotAuthUrl = `https://app.hubspot.com/oauth/authorize?` +
    `client_id=${encodeURIComponent(HUBSPOT_CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(HUBSPOT_REDIRECT_URI)}` +
    `&scope=${encodeURIComponent(scopes)}`;

  return NextResponse.json({ authUrl: hubspotAuthUrl });
} 