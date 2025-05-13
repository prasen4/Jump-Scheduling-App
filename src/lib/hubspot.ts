import { Client } from '@hubspot/api-client';
import { prisma } from '@/lib/prisma';
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts';
import { PublicObjectSearchRequest } from '@hubspot/api-client/lib/codegen/crm/objects/notes';

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
    const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
      filterGroups: [{
        filters: [{
          propertyName: 'email',
          operator: FilterOperatorEnum.Eq,
          value: email
        }]
      }],
      properties: ['firstname', 'lastname', 'email', 'company', 'jobtitle', 'notes_last_contacted', 'notes_last_updated', 'notes_next_activity_date']
    });
    
    return searchResponse.results[0];
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
    const searchResponse = await hubspotClient.crm.objects.notes.searchApi.doSearch({
      filterGroups: [],
      sorts: ['hs_lastmodifieddate'],
      properties: ['hs_note_body', 'hs_lastmodifieddate'],
      limit: 10
    } as PublicObjectSearchRequest);
    return searchResponse.results;
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