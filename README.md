# Scheduler - Meeting Scheduling Tool

A powerful scheduling tool for advisors to meet with their clients, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Google Calendar integration for managing availability
- HubSpot CRM integration for client context
- LinkedIn profile scraping for additional client insights
- Customizable scheduling windows for weekdays
- Configurable scheduling links with:
  - Maximum usage limits
  - Expiration dates
  - Custom form questions
  - Meeting length settings
  - Advance booking limits
- Email notifications with AI-enhanced context
- Modern, responsive UI

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Google OAuth credentials
- HubSpot API key
- OpenAI API key
- Gmail account for sending emails

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/scheduler_db?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# HubSpot
HUBSPOT_ACCESS_TOKEN="your-hubspot-access-token"

# OpenAI (for LinkedIn summary generation)
OPENAI_API_KEY="your-openai-api-key"

# Email (using Gmail SMTP)
SMTP_USER="your-gmail@gmail.com"
SMTP_PASSWORD="your-gmail-app-specific-password"
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/scheduler.git
   cd scheduler
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Sign in with your Google account
2. Set up your scheduling windows for different weekdays
3. Create scheduling links with custom settings and questions
4. Share the scheduling links with your clients
5. Clients can book meetings through the scheduling page
6. Receive notifications with AI-enhanced context about your clients

## Development

- `src/app/` - Next.js app router pages and API routes
- `src/components/` - React components
- `src/lib/` - Utility functions and API clients
- `prisma/` - Database schema and migrations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
