import OpenAI from 'openai';
import { prisma } from '@/lib/prisma';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface LinkedInOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

interface LinkedInProfile {
  sub?: string;
  email?: string;
  given_name?: string;
  family_name?: string;
  name?: string;
  picture?: string;
  locale?: string;
  vanityName?: string;
  headline?: string;
  summary?: string;
}

export function getLinkedInAuthUrl(): string {
  if (!process.env.LINKEDIN_CLIENT_ID || !process.env.LINKEDIN_REDIRECT_URI) {
    throw new Error('LinkedIn OAuth credentials not configured. Please set LINKEDIN_CLIENT_ID and LINKEDIN_REDIRECT_URI in your environment variables.');
  }

  const scope = 'openid profile email';
  const state = Math.random().toString(36).substring(7);
  
  return `https://www.linkedin.com/oauth/v2/authorization?` +
    `response_type=code&` +
    `client_id=${process.env.LINKEDIN_CLIENT_ID}&` +
    `redirect_uri=${encodeURIComponent(process.env.LINKEDIN_REDIRECT_URI)}&` +
    `state=${state}&` +
    `scope=${encodeURIComponent(scope)}`;
}

export async function getLinkedInProfileFromCode(code: string): Promise<string> {
  try {
    if (!process.env.LINKEDIN_CLIENT_ID || !process.env.LINKEDIN_CLIENT_SECRET || !process.env.LINKEDIN_REDIRECT_URI) {
      throw new Error('LinkedIn OAuth credentials not configured. Please set LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, and LINKEDIN_REDIRECT_URI in your environment variables.');
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('LinkedIn token error response:', errorText);
      throw new Error(`LinkedIn token error: ${tokenResponse.status} ${tokenResponse.statusText}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Fetch user profile using the userinfo endpoint (OpenID Connect)
    const profileResponse = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!profileResponse.ok) {
      const errorText = await profileResponse.text();
      console.error('LinkedIn profile error response:', errorText);
      throw new Error(`LinkedIn profile error: ${profileResponse.status} ${profileResponse.statusText}`);
    }

    const profile: LinkedInProfile = await profileResponse.json();
    
    // Format the profile data for summary
    const profileData = `
Name: ${profile.name || `${profile.given_name || ''} ${profile.family_name || ''}`}
Email: ${profile.email || 'N/A'}
Locale: ${profile.locale || 'N/A'}
LinkedIn ID: ${profile.sub || 'N/A'}
`;

    // Use OpenAI to generate a summary
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional summarizer. Create a single, concise sentence summarizing this LinkedIn profile information that would be relevant for a meeting context."
        },
        {
          role: "user",
          content: profileData
        }
      ],
      max_tokens: 100
    });

    return completion.choices[0]?.message?.content || 'Unable to generate summary';
  } catch (error) {
    console.error('Error fetching LinkedIn profile:', error);
    return `Error: Unable to fetch LinkedIn profile. ${error instanceof Error ? error.message : 'Unknown error occurred'}`;
  }
}

export async function getLinkedInProfileSummary(linkedinUrl: string): Promise<string> {
  try {
    const username = extractLinkedInUsername(linkedinUrl);
    if (!username) {
      return 'Invalid LinkedIn URL format';
    }

    // Use OpenAI to generate a summary focused on the profile URL
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides a brief note about a LinkedIn profile URL. Keep it very short and focused on the username/profile section of the URL."
        },
        {
          role: "user",
          content: `LinkedIn profile: ${linkedinUrl}\nUsername: ${username}`
        }
      ],
      max_tokens: 50
    });

    return completion.choices[0]?.message?.content || 'Unable to generate summary';
  } catch (error) {
    console.error('Error generating LinkedIn summary:', error);
    return `Error: Unable to generate LinkedIn summary. ${error instanceof Error ? error.message : 'Unknown error occurred'}`;
  }
}

function extractLinkedInUsername(url: string): string | null {
  try {
    const urlObj = new URL(url);
    if (!urlObj.hostname.includes('linkedin.com')) {
      return null;
    }
    
    // Handle different LinkedIn URL formats
    const path = urlObj.pathname;
    if (path.startsWith('/in/')) {
      return path.split('/in/')[1].split('/')[0];
    }
    return null;
  } catch (error) {
    return null;
  }
} 