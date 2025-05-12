import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const createWindowSchema = z.object({
  dayOfWeek: z.number().min(1).max(5),
  startHour: z.number().min(0).max(23),
  endHour: z.number().min(0).max(23),
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const body = await request.json();
    const validatedData = createWindowSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    const schedulingWindow = await prisma.schedulingWindow.create({
      data: {
        userId: user.id,
        dayOfWeek: validatedData.dayOfWeek,
        startHour: validatedData.startHour,
        endHour: validatedData.endHour,
      },
    });

    return NextResponse.json(schedulingWindow);
  } catch (error) {
    console.error('Error creating scheduling window:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  const session = await getServerSession(authOptions);

  try {
    // If no userId is provided, return authenticated user's windows
    if (!userId) {
      if (!session?.user?.email) {
        return new NextResponse('Unauthorized', { status: 401 });
      }

      const user = await prisma.user.findUnique({
        where: { email: session.user.email }
      });

      if (!user) {
        return new NextResponse('User not found', { status: 404 });
      }

      const windows = await prisma.schedulingWindow.findMany({
        where: { userId: user.id },
        orderBy: [
          { dayOfWeek: 'asc' },
          { startHour: 'asc' },
        ],
      });

      return NextResponse.json(windows);
    }

    // If userId is provided, return that user's windows (for public scheduling)
    const windows = await prisma.schedulingWindow.findMany({
      where: { userId },
      orderBy: [
        { dayOfWeek: 'asc' },
        { startHour: 'asc' },
      ],
    });

    return NextResponse.json(windows);
  } catch (error) {
    console.error('Error fetching scheduling windows:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new NextResponse('Missing window ID', { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    await prisma.schedulingWindow.delete({
      where: {
        id,
        userId: user.id,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting scheduling window:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 