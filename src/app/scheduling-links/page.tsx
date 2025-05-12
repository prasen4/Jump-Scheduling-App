'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

interface SchedulingLink {
  id: string;
  maxUses?: number;
  usageCount: number;
  expirationDate?: string;
  meetingLength: number;
  maxDaysInAdvance: number;
  formQuestions: string[];
  createdAt: string;
}

export default function SchedulingLinks() {
  const { data: session } = useSession();
  const [links, setLinks] = useState<SchedulingLink[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newLink, setNewLink] = useState({
    maxUses: '',
    expirationDate: '',
    meetingLength: 30,
    maxDaysInAdvance: 30,
    formQuestions: [''],
  });

  useEffect(() => {
    if (session?.user?.email) {
      fetchLinks();
    }
  }, [session]);

  const fetchLinks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/scheduling-links');
      if (!response.ok) {
        throw new Error('Failed to fetch links');
      }
      const data = await response.json();
      setLinks(data);
    } catch (error) {
      console.error('Error fetching scheduling links:', error);
      toast.error('Failed to load scheduling links');
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    if (newLink.meetingLength < 15 || newLink.meetingLength > 240) {
      toast.error('Meeting length must be between 15 and 240 minutes');
      return false;
    }
    if (newLink.maxDaysInAdvance < 1 || newLink.maxDaysInAdvance > 365) {
      toast.error('Max days in advance must be between 1 and 365');
      return false;
    }
    if (newLink.formQuestions.some(q => !q.trim())) {
      toast.error('All form questions must be filled out');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const formData = {
        ...newLink,
        maxUses: newLink.maxUses ? parseInt(newLink.maxUses) : undefined,
        formQuestions: newLink.formQuestions.filter(q => q.trim() !== ''),
      };

      const response = await fetch('/api/scheduling-links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        if (data.errors) {
          throw new Error(data.errors.map((e: any) => e.message).join(', '));
        }
        throw new Error('Failed to create link');
      }

      await fetchLinks();
      setNewLink({
        maxUses: '',
        expirationDate: '',
        meetingLength: 30,
        maxDaysInAdvance: 30,
        formQuestions: [''],
      });
      toast.success('Scheduling link created successfully');
    } catch (error) {
      console.error('Error creating scheduling link:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create scheduling link');
    } finally {
      setIsSubmitting(false);
    }
  };

  const addQuestion = () => {
    setNewLink({
      ...newLink,
      formQuestions: [...newLink.formQuestions, ''],
    });
  };

  const removeQuestion = (index: number) => {
    if (newLink.formQuestions.length === 1) {
      toast.error('You must have at least one form question');
      return;
    }
    setNewLink({
      ...newLink,
      formQuestions: newLink.formQuestions.filter((_, i) => i !== index),
    });
  };

  const updateQuestion = (index: number, value: string) => {
    const updatedQuestions = [...newLink.formQuestions];
    updatedQuestions[index] = value;
    setNewLink({
      ...newLink,
      formQuestions: updatedQuestions,
    });
  };

  if (!session) {
    return (
      <div className="text-center">
        <p className="text-gray-600">Please sign in to manage scheduling links.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Scheduling Links</h1>

      {/* Create New Link Form */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Create New Link</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Maximum Uses (Optional)</label>
              <input
                type="number"
                value={newLink.maxUses}
                onChange={(e) => setNewLink({ ...newLink, maxUses: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                min="1"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Expiration Date (Optional)</label>
              <input
                type="date"
                value={newLink.expirationDate}
                onChange={(e) => setNewLink({ ...newLink, expirationDate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                min={new Date().toISOString().split('T')[0]}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Meeting Length (minutes)</label>
              <input
                type="number"
                value={newLink.meetingLength}
                onChange={(e) => setNewLink({ ...newLink, meetingLength: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                min="15"
                max="240"
                step="15"
                required
                disabled={isSubmitting}
              />
              <p className="mt-1 text-sm text-gray-500">Between 15 and 240 minutes</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Max Days in Advance</label>
              <input
                type="number"
                value={newLink.maxDaysInAdvance}
                onChange={(e) => setNewLink({ ...newLink, maxDaysInAdvance: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                min="1"
                max="365"
                required
                disabled={isSubmitting}
              />
              <p className="mt-1 text-sm text-gray-500">Between 1 and 365 days</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Form Questions</label>
            {newLink.formQuestions.map((question, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => updateQuestion(index, e.target.value)}
                  placeholder="Enter your question"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => removeQuestion(index)}
                  className="text-red-600 hover:text-red-800 disabled:opacity-50"
                  disabled={isSubmitting || newLink.formQuestions.length === 1}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className="text-blue-600 hover:text-blue-800 text-sm disabled:opacity-50"
              disabled={isSubmitting}
            >
              + Add Question
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Link'}
          </button>
        </form>
      </div>

      {/* Existing Links */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Links</h2>
        {isLoading ? (
          <div className="text-center py-4">
            <p className="text-gray-600">Loading links...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {links.map((link) => (
              <div key={link.id} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      {link.meetingLength} minute meeting
                    </p>
                    <p className="text-sm text-gray-600">
                      Created on {new Date(link.createdAt).toLocaleDateString()}
                    </p>
                    {link.maxUses && (
                      <p className="text-sm text-gray-600">
                        Uses: {link.usageCount} / {link.maxUses}
                      </p>
                    )}
                    {link.expirationDate && (
                      <p className="text-sm text-gray-600">
                        Expires: {new Date(link.expirationDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`${window.location.origin}/schedule/${link.id}`);
                        toast.success('Link copied to clipboard');
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Copy Link
                    </button>
                    <Link
                      href={`/schedule/${link.id}`}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Preview
                    </Link>
                    <button
                      onClick={async () => {
                        if (!confirm('Are you sure you want to delete this scheduling link? This action cannot be undone.')) {
                          return;
                        }
                        try {
                          const response = await fetch(`/api/scheduling-links/${link.id}`, {
                            method: 'DELETE',
                          });
                          
                          if (!response.ok) {
                            throw new Error('Failed to delete link');
                          }
                          
                          toast.success('Scheduling link deleted successfully');
                          await fetchLinks();
                        } catch (error) {
                          console.error('Error deleting scheduling link:', error);
                          toast.error('Failed to delete scheduling link');
                        }
                      }}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {links.length === 0 && (
              <p className="text-gray-600">No scheduling links created</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 