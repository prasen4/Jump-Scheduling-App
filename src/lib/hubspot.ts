import { Client } from '@hubspot/api-client';
import { prisma } from '@/lib/prisma';

async function getHubSpotClient(userId: string) {
  const account = await prisma.account.findFirst({
    where: {
      userId,
      provider: 'hubspot',
    },
    select: {
      access_token: true,
      refresh_token: true,
      expires_at: true,
      scope: true,
    },
  });

  if (!account) {
    throw new Error('HubSpot not connected');
  }

  if (!account.access_token) {
    throw new Error('HubSpot access token missing');
  }

  // Check if token is expired
  if (account.expires_at && account.expires_at * 1000 < Date.now()) {
    throw new Error('HubSpot token expired');
  }

  // Check if we have the required scopes
  const requiredScopes = ['crm.objects.contacts.read'];
  const currentScopes = account.scope?.split(' ') || [];
  const missingScopes = requiredScopes.filter(scope => !currentScopes.includes(scope));
  
  if (missingScopes.length > 0) {
    throw new Error(`Missing HubSpot scopes: ${missingScopes.join(', ')}`);
  }

  return new Client({ accessToken: account.access_token });
}

export async function findContactByEmail(email: string, userId: string) {
  try {
    const hubspotClient = await getHubSpotClient(userId);
    const apiResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
      filterGroups: [{
        filters: [{
          propertyName: 'email',
          operator: 'EQ',
          value: email
        }]
      }]
    });
    
    return apiResponse.results[0];
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'HubSpot not connected' ||
          error.message === 'HubSpot access token missing' ||
          error.message === 'HubSpot token expired' ||
          error.message.startsWith('Missing HubSpot scopes')) {
        console.error('HubSpot connection error:', error.message);
        return null;
      }
    }
    // Log other unexpected errors
    console.error('Error searching HubSpot contact:', error);
    return null;
  }
}

export async function getContactNotes(contactId: string, userId: string) {
  try {
    const hubspotClient = await getHubSpotClient(userId);
    const apiResponse = await hubspotClient.crm.objects.notes.basicApi.getPage(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      { associations: [{ to: 'contact', ids: [contactId] }] }
    );
    return apiResponse.results;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'HubSpot not connected' ||
          error.message === 'HubSpot access token missing' ||
          error.message === 'HubSpot token expired' ||
          error.message.startsWith('Missing HubSpot scopes')) {
        console.error('HubSpot connection error:', error.message);
        return [];
      }
    }
    console.error('Error getting HubSpot contact notes:', error);
    return [];
  }
} 