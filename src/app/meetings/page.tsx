'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { Trash2 } from 'lucide-react';

interface Meeting {
  id: string;
  attendeeEmail: string;
  attendeeLinkedIn?: string;
  startTime: string;
  endTime: string;
  answers: Record<string, string>;
  hubspotContext?: string;
  linkedinContext?: string;
  schedulingLink: {
    formQuestions: string[];
  };
}

export default function MeetingsPage() {
  const { data: session } = useSession();
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      fetchMeetings();
    }
  }, [session]);

  const fetchMeetings = async () => {
    try {
      const response = await fetch('/api/meetings');
      if (!response.ok) throw new Error('Failed to fetch meetings');
      const data = await response.json();
      setMeetings(data);
    } catch (error) {
      console.error('Error fetching meetings:', error);
      toast.error('Failed to load meetings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this meeting?')) return;

    try {
      const response = await fetch(`/api/meetings/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete meeting');

      toast.success('Meeting deleted successfully');
      // Refresh the meetings list
      fetchMeetings();
    } catch (error) {
      console.error('Error deleting meeting:', error);
      toast.error('Failed to delete meeting');
    }
  };

  if (!session) {
    return (
      <div className="text-center">
        <p className="text-gray-600">Please sign in to view meetings.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center">
        <p className="text-gray-600">Loading meetings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Meetings</h1>

      {meetings.length === 0 ? (
        <p className="text-gray-600">No meetings scheduled yet.</p>
      ) : (
        <div className="space-y-6">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Meeting with {meeting.attendeeEmail}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {format(new Date(meeting.startTime), 'EEEE, MMMM d, yyyy')}
                    <br />
                    {format(new Date(meeting.startTime), 'h:mm a')} - {format(new Date(meeting.endTime), 'h:mm a')}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(meeting.id)}
                  className="text-red-600 hover:text-red-800 p-2"
                  title="Delete meeting"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              {meeting.attendeeLinkedIn && (
                <p className="text-gray-600 mb-4">
                  LinkedIn: <a href={meeting.attendeeLinkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">{meeting.attendeeLinkedIn}</a>
                </p>
              )}

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Responses</h3>
                {Object.entries(meeting.answers).map(([question, answer], index) => (
                  <div key={index}>
                    <p className="font-medium text-gray-700">{question}</p>
                    <p className="text-gray-600 whitespace-pre-wrap">{answer}</p>
                  </div>
                ))}
              </div>

              {(meeting.hubspotContext || meeting.linkedinContext) && (
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Additional Context</h3>
                  {meeting.hubspotContext && (
                    <div>
                      <p className="font-medium text-gray-700">HubSpot Notes</p>
                      <p className="text-gray-600 whitespace-pre-wrap">{meeting.hubspotContext}</p>
                    </div>
                  )}
                  {meeting.linkedinContext && (
                    <div>
                      <p className="font-medium text-gray-700">LinkedIn Information</p>
                      <p className="text-gray-600 whitespace-pre-wrap">{meeting.linkedinContext}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 