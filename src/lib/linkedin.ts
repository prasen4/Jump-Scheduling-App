import puppeteer from 'puppeteer';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function scrapeLinkedInProfile(linkedInUrl: string): Promise<string> {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Set a user agent to look more like a regular browser
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
    
    // Try to access the profile directly first
    await page.goto(linkedInUrl, { waitUntil: 'networkidle0' });
    
    // Check if we hit a login wall
    const isLoginRequired = await page.evaluate(() => {
      return document.querySelector('input#username, .authwall-join-form') !== null;
    });

    // If login wall and we have credentials, try logging in
    if (isLoginRequired && process.env.LINKEDIN_EMAIL && process.env.LINKEDIN_PASSWORD) {
      await page.goto('https://www.linkedin.com/login', { waitUntil: 'networkidle0' });
      await page.type('#username', process.env.LINKEDIN_EMAIL);
      await page.type('#password', process.env.LINKEDIN_PASSWORD);
      await Promise.all([
        page.click('.btn__primary--large'),
        page.waitForNavigation({ waitUntil: 'networkidle0' })
      ]);
      
      // Go back to the profile
      await page.goto(linkedInUrl, { waitUntil: 'networkidle0' });
    } else if (isLoginRequired) {
      // If login required but no credentials, try to extract what we can from public view
      console.log('No LinkedIn credentials provided - attempting to extract public information');
    }

    // Wait for any dynamic content to load
    try {
      await page.waitForSelector('body', { timeout: 2000 });
    } catch (error) {
      // Ignore timeout error, proceed with what we have
    }

    // Extract relevant information using more robust selectors
    const content = await page.evaluate(() => {
      // Helper function to safely get text content
      const getTextContent = (selector: string): string => {
        const elements = document.querySelectorAll(selector);
        return Array.from(elements)
          .map(el => el.textContent?.trim())
          .filter(Boolean)
          .join('\n');
      };

      // Try multiple selector patterns for different page states (public/private)
      const about = getTextContent([
        '[data-section="summary"]',
        '#about',
        '.pv-about-section',
        '.core-section-container__content',
        '.public-profile__section'
      ].join(', '));
      
      const experience = getTextContent([
        '[data-section="experience-section"] li',
        '.experience-section li',
        '.pvs-list__item--line-separated',
        '.experience-item',
        '.profile-section-card'
      ].join(', '));

      const education = getTextContent([
        '[data-section="education-section"] li',
        '.education-section li',
        '.education-item',
        '.profile-section-card'
      ].join(', '));
      
      return `About: ${about}\n\nExperience:\n${experience}\n\nEducation:\n${education}`;
    });

    await browser.close();

    // Only proceed with AI summary if we got some content
    if (!content.trim() || content === 'About: \n\nExperience:\n\n\nEducation:\n') {
      return 'Unable to extract profile information. This might be due to LinkedIn\'s privacy settings.';
    }

    // Use OpenAI to generate a summary and identify key points for context
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional summarizer. Create a concise summary of this LinkedIn profile information, focusing on key points that might be relevant for a meeting context. Include any notable career achievements, current role, and relevant background that could inform the meeting discussion."
        },
        {
          role: "user",
          content
        }
      ],
      max_tokens: 500
    });

    return completion.choices[0]?.message?.content || 'Unable to generate summary';
  } catch (error) {
    console.error('Error scraping LinkedIn profile:', error);
    return 'Error: Unable to scrape LinkedIn profile. This might be due to LinkedIn\'s privacy settings or rate limiting.';
  }
} 