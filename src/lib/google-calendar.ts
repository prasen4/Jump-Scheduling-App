import { google } from 'googleapis';
import { prisma } from './prisma';

export async function getGoogleCalendarClient(userId: string) {
  const accounts = await prisma.account.findMany({
    where: {
      userId,
      provider: 'google',
    },
  });

  if (accounts.length === 0) {
    throw new Error('Google Calendar not connected');
  }

  const account = accounts[0]; // Use the first Google account

  // Check if token is expired
  if (account.expires_at && account.expires_at * 1000 < Date.now()) {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      access_token: account.access_token ?? null,
      refresh_token: account.refresh_token ?? null,
      expiry_date: account.expires_at ? account.expires_at * 1000 : null,
    });

    try {
      const { credentials } = await oauth2Client.refreshAccessToken();
      
      // Update the token in the database
      await prisma.account.update({
        where: { id: account.id },
        data: {
          access_token: credentials.access_token,
          refresh_token: credentials.refresh_token || account.refresh_token,
          expires_at: credentials.expiry_date ? Math.floor(credentials.expiry_date / 1000) : null,
        },
      });

      // Use the new credentials
      account.access_token = credentials.access_token;
      account.refresh_token = credentials.refresh_token || account.refresh_token;
      account.expires_at = credentials.expiry_date ? Math.floor(credentials.expiry_date / 1000) : null;
    } catch (error) {
      console.error('Error refreshing Google token:', error);
      // Delete the account to force re-authentication
      await prisma.account.delete({
        where: { id: account.id }
      });
      throw new Error('Google Calendar authentication expired. Please reconnect your Google account.');
    }
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );

  oauth2Client.setCredentials({
    access_token: account.access_token ?? null,
    refresh_token: account.refresh_token ?? null,
    expiry_date: account.expires_at ? account.expires_at * 1000 : null,
  });

  return [google.calendar({ version: 'v3', auth: oauth2Client })];
}

export async function getCalendarEvents(userId: string, timeMin: Date, timeMax: Date) {
  const calendarClients = await getGoogleCalendarClient(userId);
  const allEvents = [];

  for (const calendar of calendarClients) {
    try {
      const response = await calendar.events.list({
        calendarId: 'primary',
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      });

      if (response.data.items) {
        allEvents.push(...response.data.items);
      }
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      if (error instanceof Error && error.message.includes('authentication expired')) {
        throw error; // Re-throw authentication errors
      }
    }
  }

  return allEvents;
}

export async function createCalendarEvent(
  userId: string,
  event: {
    summary: string;
    description: string;
    startTime: Date;
    endTime: Date;
    attendees: { email: string }[];
  }
) {
  const calendarClients = await getGoogleCalendarClient(userId);
  if (calendarClients.length === 0) {
    throw new Error('No Google Calendar accounts connected');
  }

  // Use the first connected calendar
  const calendar = calendarClients[0];

  try {
    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: {
        summary: event.summary,
        description: event.description,
        start: {
          dateTime: event.startTime.toISOString(),
        },
        end: {
          dateTime: event.endTime.toISOString(),
        },
        attendees: event.attendees,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    if (error instanceof Error && error.message.includes('authentication expired')) {
      throw error; // Re-throw authentication errors
    }
    throw error;
  }
} 