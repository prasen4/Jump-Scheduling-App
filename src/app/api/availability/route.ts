import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { google } from 'googleapis';
import { addMinutes, format, parse, startOfDay, endOfDay, setHours, setMinutes } from 'date-fns';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { linkId, date } = body;

    console.log('Checking availability for:', { linkId, date });

    // Get scheduling link details
    const link = await prisma.schedulingLink.findUnique({
      where: { id: linkId },
      include: {
        user: {
          include: {
            accounts: true,
            schedulingWindows: true,
          },
        },
      },
    });

    if (!link) {
      console.log('Link not found:', linkId);
      return new NextResponse('Scheduling link not found', { status: 404 });
    }

    console.log('Found scheduling windows:', link.user.schedulingWindows);

    // Get the day's scheduling window
    const selectedDate = new Date(date);
    // JavaScript getDay() returns 0-6 (Sunday-Saturday)
    // We need to convert to 1-7 (Monday-Sunday)
    const dayOfWeek = selectedDate.getDay() === 0 ? 7 : selectedDate.getDay();
    
    console.log('Looking for window on day:', dayOfWeek);
    
    const window = link.user.schedulingWindows.find(w => w.dayOfWeek === dayOfWeek);

    if (!window) {
      console.log('No scheduling window found for day:', dayOfWeek);
      return NextResponse.json([]);
    }

    console.log('Found scheduling window:', window);

    // Find Google account
    const googleAccount = link.user.accounts.find(
      account => account.provider === 'google'
    );

    if (!googleAccount?.access_token) {
      console.log('No Google account connected');
      return new NextResponse('Google Calendar not connected', { status: 400 });
    }

    console.log('Google account found:', {
      hasAccessToken: !!googleAccount.access_token,
      hasRefreshToken: !!googleAccount.refresh_token,
      expiresAt: googleAccount.expires_at
    });

    // Check if token is expired
    if (googleAccount.expires_at && googleAccount.expires_at * 1000 < Date.now()) {
      const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
      );

      oauth2Client.setCredentials({
        access_token: googleAccount.access_token ?? null,
        refresh_token: googleAccount.refresh_token ?? null,
        expiry_date: googleAccount.expires_at ? googleAccount.expires_at * 1000 : null,
      });

      try {
        const { credentials } = await oauth2Client.refreshAccessToken();
        
        // Update the token in the database
        await prisma.account.update({
          where: { id: googleAccount.id },
          data: {
            access_token: credentials.access_token,
            refresh_token: credentials.refresh_token || googleAccount.refresh_token,
            expires_at: credentials.expiry_date ? Math.floor(credentials.expiry_date / 1000) : null,
          },
        });

        // Use the new credentials
        if (credentials.access_token) {
          googleAccount.access_token = credentials.access_token;
        }
        googleAccount.refresh_token = credentials.refresh_token || googleAccount.refresh_token;
        googleAccount.expires_at = credentials.expiry_date ? Math.floor(credentials.expiry_date / 1000) : null;
      } catch (error) {
        console.error('Error refreshing Google token:', error);
        // Delete the account to force re-authentication
        await prisma.account.delete({
          where: { id: googleAccount.id }
        });
        return new NextResponse('Google Calendar authentication expired. Please reconnect your Google account.', { status: 401 });
      }
    }

    // Set up Google Calendar API
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      access_token: googleAccount.access_token ?? null,
      refresh_token: googleAccount.refresh_token ?? null,
      expiry_date: googleAccount.expires_at ? googleAccount.expires_at * 1000 : null,
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Get busy times from Google Calendar
    const startTime = setHours(selectedDate, window.startHour);
    const endTime = setHours(selectedDate, window.endHour);

    console.log('Checking calendar between:', {
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString()
    });

    try {
      const freeBusyResponse = await calendar.freebusy.query({
        requestBody: {
          timeMin: startTime.toISOString(),
          timeMax: endTime.toISOString(),
          items: [{ id: 'primary' }],
        },
      });

      const busySlots = freeBusyResponse.data.calendars?.primary?.busy || [];
      console.log('Busy slots from calendar:', busySlots);

      // Generate all possible time slots
      const availableSlots = [];
      let currentSlot = startTime;

      while (currentSlot < endTime) {
        const slotEnd = addMinutes(currentSlot, link.meetingLength);
        
        // Check if slot is within window and doesn't conflict with busy times
        if (slotEnd <= endTime) {
          const isAvailable = !busySlots.some(busy => {
            const busyStart = new Date(busy.start || '');
            const busyEnd = new Date(busy.end || '');
            return (
              (currentSlot >= busyStart && currentSlot < busyEnd) ||
              (slotEnd > busyStart && slotEnd <= busyEnd) ||
              (currentSlot <= busyStart && slotEnd >= busyEnd)
            );
          });

          if (isAvailable) {
            availableSlots.push({
              startTime: currentSlot.toISOString(),
              endTime: slotEnd.toISOString(),
            });
          }
        }

        // Move to next slot (30-minute increments)
        currentSlot = addMinutes(currentSlot, 30);
      }

      console.log('Generated available slots:', availableSlots);
      return NextResponse.json(availableSlots);
    } catch (error) {
      console.error('Error querying Google Calendar:', error);
      if (error instanceof Error && (
        error.message === 'No refresh token is set.' || 
        error.message?.includes('invalid_grant') ||
        error.message?.includes('invalid_token')
      )) {
        // Delete the account to force re-authentication
        await prisma.account.delete({
          where: {
            provider_providerAccountId: {
              provider: 'google',
              providerAccountId: googleAccount.providerAccountId
            }
          }
        });
        return new NextResponse('Google Calendar authentication expired. Please reconnect your Google account.', { status: 401 });
      }
      throw error;
    }
  } catch (error) {
    console.error('Error getting available times:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 