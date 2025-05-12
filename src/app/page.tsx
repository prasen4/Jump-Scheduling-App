'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Scheduler
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        A powerful scheduling tool for advisors to meet with their clients. Connect your Google Calendar,
        integrate with HubSpot, and streamline your meeting scheduling process.
      </p>
      {session ? (
        <Link
          href="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-600">Sign in to get started:</p>
          <Link
            href="/api/auth/signin"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 inline-block"
          >
            Sign In with Google
          </Link>
        </div>
      )}
    </div>
  );
}
