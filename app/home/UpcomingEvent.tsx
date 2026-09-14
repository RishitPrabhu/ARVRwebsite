'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Event = {
  id: string;
  title: string;
  short_description: string;
  start_time: string;
  event_type: string;
  status: string;
  location: string;
  registration_fee: number;
  registration_link: string | null;
};

const ACTIVE_STATUSES = ['Upcoming', 'Ongoing', 'Registration Closed'];

function formatDate(dateValue: string) {
  const date = new Date(dateValue);
  return {
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    year: date.getFullYear(),
    time: date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
  };
}

export default function UpcomingEvent() {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFlagshipEvent() {
      const { data, error } = await supabase
        .from('events')
        .select('id, title, short_description, start_time, event_type, status, location, registration_fee, registration_link')
        .eq('event_type', 'Flagship')
        .in('status', ACTIVE_STATUSES)
        .order('start_time', { ascending: true })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error(error);
      } else {
        setEvent(data);
      }
      setLoading(false);
    }

    fetchFlagshipEvent();
  }, []);

  if (loading) {
    return <p className="event-loading">Loading the next flagship event...</p>;
  }

  if (!event) {
    return <p className="event-loading">No flagship event scheduled yet.</p>;
  }

  const date = formatDate(event.start_time);
  const registrationAvailable = event.status === 'Upcoming' && event.registration_link;

  return (
    <div className="upcoming-card mt-[26px]">
      <div className="event-date-panel">
        <span className="event-kicker">Next signal</span>
        <div className="date-block">
          <div className="d">{date.day}</div>
          <div className="m">{date.month} {date.year}</div>
        </div>
      </div>
      <div>
        <div className="event-heading-row">
          <span className="event-overline">// Featured transmission</span>
          <span className="tag">{event.event_type}</span>
          <span className={`event-status-dot ${event.status.toLowerCase().replaceAll(' ', '-')}`}>
            {event.status}
          </span>
        </div>
        <h3>{event.title}</h3>
        <p>{event.short_description}</p>
        <div className="event-meta event-meta-grid">
          <span><b>Location</b>{event.location}</span>
          <span><b>Starts</b>{date.time}</span>
          <span><b>Entry</b>{event.registration_fee === 0 ? 'Free' : `₹${event.registration_fee}`}</span>
        </div>
      </div>
      <div className="event-action-rail">
        <span className="event-action-label">Reserve your spot</span>
        {registrationAvailable ? (
          <a
            className="btn btn-primary event-action-button"
            href={event.registration_link || undefined}
            target="_blank"
            rel="noreferrer"
          >
            Register <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="event-status">{event.status}</span>
        )}
      </div>
    </div>
  );
}
