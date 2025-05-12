import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(
  request: Request,
  { params }: { params: { linkId: string } }
) {
  try {
    const link = await prisma.schedulingLink.findUnique({
      where: { id: params.linkId },
      select: {
        id: true,
        meetingLength: true,
        maxDaysInAdvance: true,
        formQuestions: true,
        userId: true,
        maxUses: true,
        usageCount: true,
        expirationDate: true,
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    if (!link) {
      return new NextResponse('Scheduling link not found', { status: 404 });
    }

    // Check if link has expired
    if (link.expirationDate && new Date() > new Date(link.expirationDate)) {
      return new NextResponse('Scheduling link has expired', { status: 410 });
    }

    // Check if link has reached max uses
    if (link.maxUses && link.usageCount >= link.maxUses) {
      return new NextResponse('Scheduling link has reached maximum uses', { status: 410 });
    }

    return NextResponse.json(link);
  } catch (error) {
    console.error('Error fetching scheduling link:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { linkId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // First verify that the user owns this link
    const link = await prisma.schedulingLink.findUnique({
      where: { id: params.linkId },
      include: { user: true },
    });

    if (!link) {
      return new NextResponse('Link not found', { status: 404 });
    }

    if (link.user.email !== session.user.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Delete the link and all associated meetings
    await prisma.schedulingLink.delete({
      where: { id: params.linkId },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting scheduling link:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 