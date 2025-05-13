'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { format, addDays, parseISO, isAfter, isBefore, startOfDay } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { toast } from 'react-hot-toast';

interface SchedulingLink {
  id: string;
  meetingLength: number;
  maxDaysInAdvance: number;
  formQuestions: string[];
  userId: string;
  user: {
    id: string;
    email: string;
  };
}

interface SchedulingWindow {
  dayOfWeek: number;
  startHour: number;
  endHour: number;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
}

export default function SchedulePage() {
  const { linkId } = useParams();
  const [link, setLink] = useState<SchedulingLink | null>(null);
  const [windows, setWindows] = useState<SchedulingWindow[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLinkDetails = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Fetch scheduling link details
      const linkResponse = await fetch(`/api/scheduling-links/${linkId}`);
      if (!linkResponse.ok) {
        const errorText = await linkResponse.text();
        throw new Error(errorText || 'Failed to fetch link details');
      }
      const linkData = await linkResponse.json();
      setLink(linkData);

      // Fetch scheduling windows for the link owner
      const windowsResponse = await fetch(`/api/scheduling-windows?userId=${linkData.userId}`);
      if (!windowsResponse.ok) {
        throw new Error('Failed to fetch scheduling windows');
      }
      const windowsData = await windowsResponse.json();
      setWindows(windowsData);
    } catch (error) {
      console.error('Error fetching scheduling details:', error);
      setError(error instanceof Error ? error.message : 'Failed to load scheduling information');
      toast.error('Failed to load scheduling information');
    } finally {
      setIsLoading(false);
    }
  }, [linkId]);

  const fetchAvailableSlots = useCallback(async () => {
    if (!selectedDate || !link) return;

    setIsLoadingSlots(true);
    try {
      const response = await fetch('/api/availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          linkId,
          date: selectedDate.toISOString(),
          meetingLength: link.meetingLength,
        }),
      });

      if (!response.ok) throw new Error('Failed to fetch available slots');
      const slots = await response.json();
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Error fetching available slots:', error);
      toast.error('Failed to load available time slots');
    } finally {
      setIsLoadingSlots(false);
    }
  }, [selectedDate, link, linkId]);

  useEffect(() => {
    if (linkId) {
      fetchLinkDetails();
    }
  }, [linkId, fetchLinkDetails]);

  useEffect(() => {
    if (selectedDate && link) {
      fetchAvailableSlots();
    }
  }, [selectedDate, link, fetchAvailableSlots]);

  const isDateDisabled = (date: Date) => {
    if (!link) return true;

    const today = startOfDay(new Date());
    const maxDate = addDays(today, link.maxDaysInAdvance);

    // Check if date is within allowed range
    if (isBefore(date, today) || isAfter(date, maxDate)) return true;

    // Check if there's a scheduling window for this day
    const dayOfWeek = date.getDay();
    return !windows.some(window => window.dayOfWeek === (dayOfWeek === 0 ? 7 : dayOfWeek));
  };

  const handleTimeSlotSelect = async (slot: TimeSlot) => {
    // Navigate to the booking form
    window.location.href = `/schedule/${linkId}/book?start=${encodeURIComponent(slot.startTime)}&end=${encodeURIComponent(slot.endTime)}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-black">Loading scheduling information...</p>
      </div>
    );
  }

  if (error || !link) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600">{error || 'Scheduling link not found or has expired.'}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-black mb-8">
          Schedule a {link.meetingLength} Minute Meeting
        </h1>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Select a Date</h2>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={isDateDisabled}
            className="rounded-md border"
          />
        </div>

        {selectedDate && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-black mb-4">
              Available Times for {format(selectedDate, 'EEEE, MMMM d, yyyy')}
            </h2>
            
            {isLoadingSlots ? (
              <p className="text-black">Loading available times...</p>
            ) : availableSlots.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {availableSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeSlotSelect(slot)}
                    className="bg-gray-50 hover:bg-gray-100 text-black rounded-md py-3 px-4 text-center"
                  >
                    {format(parseISO(slot.startTime), 'h:mm a')}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-black">No available times on this date.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 