import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCalendarEvents } from '@/lib/google-calendar';
import { addDays, startOfDay, endOfDay, setHours, setMinutes } from 'date-fns';
import { calendar_v3 } from 'googleapis';

interface SchedulingWindow {
  dayOfWeek: number;
  startHour: number;
  endHour: number;
}

interface CalendarEvent {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const linkId = searchParams.get('linkId');

  if (!linkId) {
    return new NextResponse('Missing link ID', { status: 400 });
  }

  try {
    // Get the scheduling link and windows
    const schedulingLink = await prisma.schedulingLink.findUnique({
      where: { id: linkId },
      include: {
        user: true,
      },
    });

    if (!schedulingLink) {
      return new NextResponse('Scheduling link not found', { status: 404 });
    }

    // Check if the link has expired
    if (schedulingLink.expirationDate && new Date() > schedulingLink.expirationDate) {
      return new NextResponse('Scheduling link has expired', { status: 400 });
    }

    // Check if the link has reached its maximum uses
    if (schedulingLink.maxUses && schedulingLink.usageCount >= schedulingLink.maxUses) {
      return new NextResponse('Scheduling link has reached maximum uses', { status: 400 });
    }

    const windows = await prisma.schedulingWindow.findMany({
      where: {
        userId: schedulingLink.userId,
      },
    });

    // Get the date range
    const now = new Date();
    const maxDate = addDays(now, schedulingLink.maxDaysInAdvance);

    // Get all calendar events
    const events = await getCalendarEvents(schedulingLink.userId, now, maxDate);

    // Generate available time slots
    const availableSlots: Date[] = [];
    let currentDate = startOfDay(now);

    while (currentDate <= maxDate) {
      const dayOfWeek = currentDate.getDay();
      // Convert from JavaScript's 0-6 (Sunday-Saturday) to our 1-7 (Monday-Sunday) format
      const adjustedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      
      // Check if there's a scheduling window for this day
      const dayWindows = windows.filter((w: SchedulingWindow) => w.dayOfWeek === adjustedDayOfWeek);
      
      for (const window of dayWindows) {
        let slotTime = setHours(currentDate, window.startHour);
        const endTime = setHours(currentDate, window.endHour);

        while (slotTime < endTime) {
          const slotEndTime = new Date(slotTime.getTime() + schedulingLink.meetingLength * 60000);
          
          // Check if slot conflicts with any calendar events
          const hasConflict = events.some((event: calendar_v3.Schema$Event) => {
            if (!event.start?.dateTime && !event.start?.date) return false;
            if (!event.end?.dateTime && !event.end?.date) return false;

            const eventStart = new Date(event.start.dateTime || event.start.date as string);
            const eventEnd = new Date(event.end.dateTime || event.end.date as string);
            
            return (
              (slotTime >= eventStart && slotTime < eventEnd) ||
              (slotEndTime > eventStart && slotEndTime <= eventEnd)
            );
          });

          if (!hasConflict) {
            availableSlots.push(slotTime);
          }

          slotTime = new Date(slotTime.getTime() + 30 * 60000); // 30-minute increments
        }
      }

      currentDate = addDays(currentDate, 1);
    }

    return NextResponse.json(availableSlots);
  } catch (error) {
    console.error('Error getting available times:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 