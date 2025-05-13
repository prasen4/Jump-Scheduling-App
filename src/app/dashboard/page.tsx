'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Account {
  provider: string;
  type: string;
}

interface Meeting {
  id: string;
  attendeeEmail: string;
  startTime: string;
  answers: Record<string, string>;
}

export default function Dashboard() {
  const { data: session } = useSession();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [recentMeetings, setRecentMeetings] = useState<Meeting[]>([]);
  const [isConnectingHubSpot, setIsConnectingHubSpot] = useState(false);
  const [isConnectingLinkedIn, setIsConnectingLinkedIn] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (session?.user?.id) {
      // Fetch connected accounts
      fetch('/api/accounts')
        .then(res => res.json())
        .then(data => setAccounts(data))
        .catch(error => console.error('Error fetching accounts:', error));

      // Fetch recent meetings
      fetch('/api/meetings')
        .then(res => res.json())
        .then(data => setRecentMeetings(data))
        .catch(error => console.error('Error fetching meetings:', error));
    }
  }, [session]);

  const handleConnectHubSpot = async () => {
    setIsConnectingHubSpot(true);
    try {
      const response = await fetch('/api/hubspot/auth');
      if (!response.ok) {
        throw new Error('Failed to initiate HubSpot connection');
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      window.location.href = data.authUrl;
    } catch (error) {
      console.error('Error initiating HubSpot connection:', error);
      setIsConnectingHubSpot(false);
    }
  };

  const handleConnectLinkedIn = async () => {
    setIsConnectingLinkedIn(true);
    try {
      const response = await fetch('/api/linkedin/auth');
      if (!response.ok) {
        throw new Error('Failed to initiate LinkedIn connection');
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      window.location.href = data.authUrl;
    } catch (error) {
      console.error('Error initiating LinkedIn connection:', error);
      setIsConnectingLinkedIn(false);
    }
  };

  const isHubSpotConnected = accounts.some(account => account.provider === 'hubspot');
  const isLinkedInConnected = accounts.some(account => account.provider === 'linkedin');
  const isGoogleConnected = accounts.some(account => account.provider === 'google');

  if (!session) {
    return (
      <div className="text-center">
        <p className="text-gray-600">Please sign in to access the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      {/* Success/Error Messages */}
      {searchParams.get('success') === 'hubspot_connected' && (
        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-green-800">Successfully connected to HubSpot!</p>
        </div>
      )}
      {searchParams.get('error') === 'hubspot_auth_failed' && (
        <div className="bg-red-50 p-4 rounded-md">
          <p className="text-red-800">Failed to connect to HubSpot. Please try again.</p>
        </div>
      )}
      {searchParams.get('success') === 'linkedin_connected' && (
        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-green-800">Successfully connected to LinkedIn!</p>
        </div>
      )}
      {searchParams.get('error') === 'linkedin_auth_failed' && (
        <div className="bg-red-50 p-4 rounded-md">
          <p className="text-red-800">Failed to connect to LinkedIn. Please try again.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Connected Accounts */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Connected Accounts</h2>
          <div className="space-y-4">
            {/* Google Calendar Status */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Google Calendar</span>
              <span className="text-sm text-green-600">Connected</span>
            </div>

            {/* HubSpot Account Status */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600">HubSpot CRM</span>
              {isHubSpotConnected ? (
                <span className="text-sm text-green-600">Connected</span>
              ) : (
                <button
                  onClick={handleConnectHubSpot}
                  disabled={isConnectingHubSpot}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium disabled:opacity-50"
                >
                  {isConnectingHubSpot ? 'Connecting...' : 'Connect'}
                </button>
              )}
            </div>

            {/* LinkedIn Account Status */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600">LinkedIn</span>
              {isLinkedInConnected ? (
                <span className="text-sm text-green-600">Connected</span>
              ) : (
                <button
                  onClick={handleConnectLinkedIn}
                  disabled={isConnectingLinkedIn}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium disabled:opacity-50"
                >
                  {isConnectingLinkedIn ? 'Connecting...' : 'Connect'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/scheduling-windows"
              className="block w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md text-gray-700"
            >
              Manage Scheduling Windows
            </Link>
            <Link
              href="/scheduling-links"
              className="block w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md text-gray-700"
            >
              Create New Scheduling Link
            </Link>
            <Link
              href="/meetings"
              className="block w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md text-gray-700"
            >
              View All Meetings
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Meetings */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Meetings</h2>
        <div className="space-y-4">
          {recentMeetings.length > 0 ? (
            recentMeetings.map(meeting => (
              <div key={meeting.id} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{meeting.attendeeEmail}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(meeting.startTime).toLocaleString()}
                    </p>
                  </div>
                  <Link
                    href={`/meetings/${meeting.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No recent meetings</p>
          )}
        </div>
      </div>
    </div>
  );
} 