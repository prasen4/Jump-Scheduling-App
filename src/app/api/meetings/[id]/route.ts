import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // First check if the meeting belongs to the user
    const meeting = await prisma.meeting.findUnique({
      where: { id: params.id },
      select: { userId: true },
    });

    if (!meeting) {
      return new NextResponse('Meeting not found', { status: 404 });
    }

    if (meeting.userId !== session.user.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Delete the meeting
    await prisma.meeting.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting meeting:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 