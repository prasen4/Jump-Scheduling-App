'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-hot-toast';

interface SchedulingLink {
  id: string;
  meetingLength: number;
  formQuestions: string[];
}

export default function BookingPage() {
  const { linkId } = useParams();
  const searchParams = useSearchParams();
  const startTime = searchParams.get('start');
  const endTime = searchParams.get('end');

  const [link, setLink] = useState<SchedulingLink | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    linkedIn: '',
    answers: {} as Record<string, string>,
  });

  useEffect(() => {
    fetchLinkDetails();
  }, [linkId]);

  const fetchLinkDetails = async () => {
    try {
      const response = await fetch(`/api/scheduling-links/${linkId}`);
      if (!response.ok) throw new Error('Failed to fetch link details');
      const data = await response.json();
      setLink(data);

      // Initialize answers object
      const initialAnswers = data.formQuestions.reduce((acc: Record<string, string>, question: string) => {
        acc[question] = '';
        return acc;
      }, {});
      setFormData(prev => ({ ...prev, answers: initialAnswers }));
    } catch (error) {
      console.error('Error fetching link details:', error);
      toast.error('Failed to load scheduling information');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!link || !startTime || !endTime) return;

    // Validate LinkedIn URL if provided
    if (formData.linkedIn && !formData.linkedIn.includes('linkedin.com')) {
      toast.error('Please enter a valid LinkedIn URL');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/meetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          schedulingLinkId: linkId,
          startTime,
          endTime,
          attendeeEmail: formData.email,
          attendeeLinkedIn: formData.linkedIn || undefined,
          answers: formData.answers,
        }),
      });

      if (!response.ok) throw new Error('Failed to schedule meeting');

      // Redirect to success page
      window.location.href = `/schedule/${linkId}/success`;
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      toast.error('Failed to schedule meeting');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-black">Loading...</p>
      </div>
    );
  }

  if (!link || !startTime || !endTime) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600">Invalid booking request</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-lg mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-black mb-6">
            Schedule {link.meetingLength} Minute Meeting
          </h1>

          <div className="mb-6">
            <h2 className="text-lg font-medium text-black mb-2">Selected Time</h2>
            <p className="text-black">
              {format(parseISO(startTime), 'EEEE, MMMM d, yyyy')}
              <br />
              {format(parseISO(startTime), 'h:mm a')} - {format(parseISO(endTime), 'h:mm a')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black/60"
                placeholder="your@email.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                LinkedIn URL (Optional)
              </label>
              <input
                type="text"
                value={formData.linkedIn}
                onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                placeholder="https://linkedin.com/in/username"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black/60"
                disabled={isSubmitting}
              />
            </div>

            {link.formQuestions.map((question) => (
              <div key={question}>
                <label className="block text-sm font-medium text-black">
                  {question} *
                </label>
                <textarea
                  required
                  value={formData.answers[question]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      answers: { ...formData.answers, [question]: e.target.value },
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black placeholder-black/60"
                  placeholder="Type your answer here..."
                  rows={3}
                  disabled={isSubmitting}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 