'use client';

import { useEffect, useState } from 'react';
import { subscribeToTable } from '@/lib/supabase';
import { MapPin, Clock, Ticket, ExternalLink, Sparkles } from 'lucide-react';

type Event = {
  id: string;
  title: string;
  short_description: string;
  start_time: string | null;
  event_type: string;
  status: string;
  location: string;
  registration_fee: number | null;
  registration_link: string | null;
};

const ACTIVE_STATUSES = ['Upcoming', 'Ongoing', 'Registration Closed'];

function formatDate(dateValue: string | null | undefined) {
  if (!dateValue) {
    return {
      iso: '',
      day: '--',
      month: 'TBA',
      year: '',
      time: 'TBA',
    };
  }

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return {
      iso: '',
      day: '--',
      month: 'TBA',
      year: '',
      time: 'TBA',
    };
  }

  return {
    iso: date.toISOString(),
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
    const unsubscribe = subscribeToTable<Event>(
      'events',
      (data) => {
        const current = data
          .filter(
            (row) =>
              row.event_type === 'Flagship' &&
              ACTIVE_STATUSES.includes(row.status)
          )
          .sort((a, b) => {
            const aTime = a.start_time ? new Date(a.start_time).getTime() : 0;
            const bTime = b.start_time ? new Date(b.start_time).getTime() : 0;
            return aTime - bTime;
          })[0] ?? null;

        setEvent(current);
        setLoading(false);
      },
      {
        select: 'id, title, short_description, start_time, event_type, status, location, registration_fee, registration_link',
        eq: { event_type: 'Flagship' },
        in: { status: ACTIVE_STATUSES },
        order: { column: 'start_time', ascending: true },
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="event-loading-panel" aria-live="polite">
        <div className="event-loading-skeleton" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="event-empty-state">
        <p>No flagship event scheduled at the moment.</p>
      </div>
    );
  }

  const date = formatDate(event.start_time);
  const registrationAvailable = event.status === 'Upcoming' && Boolean(event.registration_link);
  const feeLabel = event.registration_fee === null || event.registration_fee === undefined
    ? 'Check details'
    : event.registration_fee === 0
      ? 'Free Entry'
      : `₹${event.registration_fee}`;

  const statusClass = event.status === 'Ongoing' ? 'event-status-dot ongoing' : 'event-status-dot';

  return (
    <article className="upcoming-card">
      <div className="event-date-panel">
        <span className="event-kicker">
          <Sparkles className="w-3 h-3" /> Signal
        </span>
        <time dateTime={date.iso} className="date-block">
          <span className="d">{date.day}</span>
          <span className="m">{date.month} {date.year}</span>
        </time>
      </div>

      <div className="event-body">
        <div className="event-heading-row">
          <span className="tag">{event.event_type}</span>
          <span className={statusClass}>{event.status}</span>
        </div>

        <div>
          <h3>{event.title}</h3>
          <p>{event.short_description}</p>
        </div>

        <div className="event-meta-grid">
          <span>
            <b>Venue</b>
            <span className="meta-value"><MapPin className="meta-icon" />{event.location}</span>
          </span>
          <span>
            <b>Time</b>
            <span className="meta-value"><Clock className="meta-icon" />{date.time}</span>
          </span>
          <span>
            <b>Fee</b>
            <span className="meta-value"><Ticket className="meta-icon" />{feeLabel}</span>
          </span>
        </div>
      </div>

      <div className="event-action-rail">
        <span className="event-action-label">{registrationAvailable ? 'Reserve' : 'Status'}</span>
        {registrationAvailable ? (
          <a
            href={event.registration_link!}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary event-action-button"
          >
            Register Now
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <span className="event-status">{event.status}</span>
        )}
      </div>
    </article>
  );
}
