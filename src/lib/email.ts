import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';
import { getGoogleAccessToken } from '@/lib/google-auth';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function sendSchedulingNotification(userEmail: string, {
  attendeeEmail,
  startTime,
  answers,
  hubspotContext,
  linkedinContext,
}: {
  attendeeEmail: string;
  startTime: Date;
  answers: Record<string, string>;
  hubspotContext?: string;
  linkedinContext?: string;
}) {
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const oauth2Client = await getGoogleAccessToken(user.id);
  const { token: accessToken } = await oauth2Client.getAccessToken();

  if (!accessToken) {
    throw new Error('Failed to get access token');
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: userEmail,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      accessToken,
      refreshToken: oauth2Client.credentials.refresh_token,
    },
  } as nodemailer.TransportOptions);

  // Use AI to augment answers with context
  let augmentedAnswers = '';
  if (Object.keys(answers).length > 0) {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that analyzes meeting responses and context to provide insights. For each answer, if there is relevant context from HubSpot or LinkedIn, incorporate it naturally. Format the output as:\n\nQuestion: [question]\nAnswer: [answer]\nContext: [relevant context if any]\n\nKeep the context relevant and concise."
          },
          {
            role: "user",
            content: JSON.stringify({
              answers,
              hubspotContext,
              linkedinContext
            })
          }
        ],
        max_tokens: 1000
      });

      augmentedAnswers = completion.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('Error augmenting answers:', error);
      // Fallback to basic format if AI augmentation fails
      augmentedAnswers = Object.entries(answers)
        .map(([question, answer]) => `Question: ${question}\nAnswer: ${answer}`)
        .join('\n\n');
    }
  }

  const additionalContext = [];
  if (hubspotContext) {
    additionalContext.push('HubSpot Notes:\n' + hubspotContext);
  }
  if (linkedinContext) {
    additionalContext.push('LinkedIn Profile:\n' + linkedinContext);
  }

  try {
    await transporter.sendMail({
      from: userEmail,
      to: userEmail,
      subject: `New Meeting Scheduled with ${attendeeEmail}`,
      text: `
A new meeting has been scheduled with ${attendeeEmail}
Time: ${startTime.toLocaleString()}

Responses and Context:
${augmentedAnswers}

${additionalContext.length > 0 ? '\nAdditional Background:\n' + additionalContext.join('\n\n') : ''}
      `.trim(),
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
} 