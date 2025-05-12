import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const createLinkSchema = z.object({
  maxUses: z.number().optional(),
  expirationDate: z.string().optional(),
  meetingLength: z.number().min(15).max(240),
  maxDaysInAdvance: z.number().min(1).max(365),
  formQuestions: z.array(z.string().min(1)),
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const body = await request.json();
    const validatedData = createLinkSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    const schedulingLink = await prisma.schedulingLink.create({
      data: {
        userId: user.id,
        maxUses: validatedData.maxUses,
        expirationDate: validatedData.expirationDate ? new Date(validatedData.expirationDate) : null,
        meetingLength: validatedData.meetingLength,
        maxDaysInAdvance: validatedData.maxDaysInAdvance,
        formQuestions: validatedData.formQuestions,
      },
    });

    return NextResponse.json(schedulingLink);
  } catch (error) {
    console.error('Error creating scheduling link:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    const links = await prisma.schedulingLink.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(links);
  } catch (error) {
    console.error('Error fetching scheduling links:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 