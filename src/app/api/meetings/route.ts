import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { findContactByEmail, getContactNotes } from '@/lib/hubspot';
import { scrapeLinkedInProfile } from '@/lib/linkedin';
import { createCalendarEvent } from '@/lib/google-calendar';
import { sendSchedulingNotification } from '@/lib/email';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const createMeetingSchema = z.object({
  schedulingLinkId: z.string(),
  startTime: z.string(),
  attendeeEmail: z.string().email(),
  attendeeLinkedIn: z.string().optional(),
  answers: z.record(z.string(), z.string()),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = createMeetingSchema.parse(body);

    // Get the scheduling link
    const schedulingLink = await prisma.schedulingLink.findUnique({
      where: { id: validatedData.schedulingLinkId },
      include: { user: true },
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

    const startTime = new Date(validatedData.startTime);
    const endTime = new Date(startTime.getTime() + schedulingLink.meetingLength * 60000);

    // Get HubSpot context
    let hubspotContext = '';
    try {
      const hubspotContact = await findContactByEmail(validatedData.attendeeEmail, schedulingLink.userId);
      if (hubspotContact) {
        const notes = await getContactNotes(hubspotContact.id, schedulingLink.userId);
        hubspotContext = notes.map(note => note.content).join('\n\n');
      }
    } catch (error) {
      console.error('Error getting HubSpot context:', error);
      // Continue without HubSpot context
    }

    // Get LinkedIn context
    let linkedinContext = '';
    if (validatedData.attendeeLinkedIn) {
      try {
        linkedinContext = await scrapeLinkedInProfile(validatedData.attendeeLinkedIn);
      } catch (error) {
        console.error('Error getting LinkedIn context:', error);
        // Continue without LinkedIn context
      }
    }

    // Create the meeting
    const meeting = await prisma.meeting.create({
      data: {
        schedulingLinkId: validatedData.schedulingLinkId,
        userId: schedulingLink.userId,
        attendeeEmail: validatedData.attendeeEmail,
        attendeeLinkedIn: validatedData.attendeeLinkedIn,
        startTime,
        endTime,
        answers: validatedData.answers,
        hubspotContext,
        linkedinContext,
      },
    });

    // Increment the usage count
    await prisma.schedulingLink.update({
      where: { id: validatedData.schedulingLinkId },
      data: { usageCount: { increment: 1 } },
    });

    // Create calendar event
    try {
      await createCalendarEvent(schedulingLink.userId, {
        summary: `Meeting with ${validatedData.attendeeEmail}`,
        description: Object.entries(validatedData.answers)
          .map(([q, a]) => `${q}: ${a}`)
          .join('\n'),
        startTime,
        endTime,
        attendees: [{ email: validatedData.attendeeEmail }],
      });
    } catch (error) {
      console.error('Error creating calendar event:', error);
      // Continue without calendar event
    }

    // Send email notification
    try {
      await sendSchedulingNotification(schedulingLink.user.email!, {
        attendeeEmail: validatedData.attendeeEmail,
        startTime,
        answers: validatedData.answers,
        hubspotContext,
        linkedinContext,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Continue without email notification
    }

    return NextResponse.json(meeting);
  } catch (error) {
    console.error('Error creating meeting:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const meetings = await prisma.meeting.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        schedulingLink: {
          select: {
            formQuestions: true,
          },
        },
      },
      orderBy: {
        startTime: 'desc',
      },
    });

    return NextResponse.json(meetings);
  } catch (error) {
    console.error('Error fetching meetings:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 