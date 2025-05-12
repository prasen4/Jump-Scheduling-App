'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface SchedulingWindow {
  id: string;
  dayOfWeek: number;
  startHour: number;
  endHour: number;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function SchedulingWindows() {
  const { data: session } = useSession();
  const [windows, setWindows] = useState<SchedulingWindow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newWindow, setNewWindow] = useState({
    dayOfWeek: 1,
    startHour: 9,
    endHour: 17,
  });

  useEffect(() => {
    if (session?.user?.email) {
      fetchWindows();
    }
  }, [session]);

  const fetchWindows = async () => {
    try {
      const response = await fetch('/api/scheduling-windows');
      if (!response.ok) {
        throw new Error('Failed to fetch windows');
      }
      const data = await response.json();
      setWindows(data);
    } catch (error) {
      console.error('Error fetching scheduling windows:', error);
      toast.error('Failed to load scheduling windows');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (newWindow.startHour >= newWindow.endHour) {
        toast.error('End time must be after start time');
        return;
      }

      const response = await fetch('/api/scheduling-windows', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWindow),
      });

      if (!response.ok) {
        throw new Error('Failed to create window');
      }

      await fetchWindows();
      setNewWindow({
        dayOfWeek: 1,
        startHour: 9,
        endHour: 17,
      });
      toast.success('Scheduling window added successfully');
    } catch (error) {
      console.error('Error creating scheduling window:', error);
      toast.error('Failed to create scheduling window');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/scheduling-windows?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete window');
      }

      await fetchWindows();
      toast.success('Scheduling window deleted successfully');
    } catch (error) {
      console.error('Error deleting scheduling window:', error);
      toast.error('Failed to delete scheduling window');
    }
  };

  if (!session) {
    return (
      <div className="text-center">
        <p className="text-gray-600">Please sign in to manage scheduling windows.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Scheduling Windows</h1>

      {/* Add New Window Form */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Window</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Day of Week</label>
            <select
              value={newWindow.dayOfWeek}
              onChange={(e) => setNewWindow({ ...newWindow, dayOfWeek: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              disabled={isLoading}
            >
              {DAYS.map((day, index) => (
                <option key={day} value={index + 1}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Hour</label>
              <select
                value={newWindow.startHour}
                onChange={(e) => setNewWindow({ ...newWindow, startHour: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                disabled={isLoading}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>
                    {i.toString().padStart(2, '0')}:00
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End Hour</label>
              <select
                value={newWindow.endHour}
                onChange={(e) => setNewWindow({ ...newWindow, endHour: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                disabled={isLoading}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>
                    {i.toString().padStart(2, '0')}:00
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add Window'}
          </button>
        </form>
      </div>

      {/* Existing Windows */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Windows</h2>
        <div className="space-y-4">
          {windows.map((window) => (
            <div
              key={window.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <p className="font-medium text-gray-900">{DAYS[window.dayOfWeek - 1]}</p>
                <p className="text-sm text-gray-600">
                  {window.startHour.toString().padStart(2, '0')}:00 -{' '}
                  {window.endHour.toString().padStart(2, '0')}:00
                </p>
              </div>
              <button
                onClick={() => handleDelete(window.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          ))}
          {windows.length === 0 && (
            <p className="text-gray-600">No scheduling windows set</p>
          )}
        </div>
      </div>
    </div>
  );
} 