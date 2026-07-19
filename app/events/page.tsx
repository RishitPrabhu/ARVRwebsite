"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { supabase } from "@/lib/supabase";

interface Event {
  id: string;
  title: string;
  short_description: string;
  full_description: string | null;
  start_time: string;
  end_time: string | null;
  event_type: string;
  status: string;
  location: string;
  registration_fee: number;
  registration_link: string |null;
  image_url: string | null;
  max_participants: number | null;
  current_participants: number | null;
  prizes: string | null;
  resources_link: string | null;
}

export default function EventsPage() {
  const [upcoming, setUpcoming] = useState<Event[]>([]);
  const [past, setPast] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("start_time", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    setUpcoming(
      data.filter(
        (event) =>
          event.status === "Upcoming" ||
          event.status === "Ongoing" ||
          event.status === "Registration Closed"
      )
    );

    setPast(
      data.filter(
        (event) =>
          event.status === "Completed" ||
          event.status === "Cancelled"
      )
    );
  }

  function handleRegister(link: string | null) {
    if (!link || link.trim() === "") {
      alert("Registration is not available.");
      return;
    }

    window.open(link, "_blank", "noopener,noreferrer");
  }

  function renderEvent(event: Event, isPast = false) {
    const date = new Date(event.start_time);

    const day = date.getDate();

    const month = date
      .toLocaleString("en-US", {
        month: "short",
      })
      .toUpperCase();

    const year = date.getFullYear();

    const time = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    return (
      <div
        key={event.id}
        className={`event-row ${isPast ? "opacity-75" : ""} ${
          event.event_type === "Flagship" && !isPast ? "featured" : ""
        }`}
      >
        <div className="date-block">
          <div className="d">{day}</div>
          <div className="m">
            {month} {year}
          </div>
        </div>

        <div className="flex-1">
          {!isPast && (
            <span className="tag">{event.event_type}</span>
          )}

          <h3 className="mt-[8px]">{event.title}</h3>

          <p>{event.short_description}</p>

          <div className="event-meta">
            📍 <span>{event.location}</span>
            {" · "}
            🕘 <span>{time}</span>
            {" · "}
            🎟{" "}
            <span>
              {event.registration_fee === 0
                ? "Free"
                : `₹${event.registration_fee}`}
            </span>

            {event.prizes && (
              <>
                {" · "}
                🏆 <span>{event.prizes}</span>
              </>
            )}
          </div>
        </div>

        {/* Buttons */}

        {event.status === "Upcoming" && (
          <button
            className={
              event.event_type === "Flagship"
                ? "btn btn-primary"
                : "btn btn-ghost"
            }
            onClick={() => handleRegister(event.registration_link)}
          >
            Register
          </button>
        )}

        {event.status === "Registration Closed" && (
          <button
            className="btn btn-ghost"
            disabled
          >
            Registration Closed
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <section className="page visible" id="page-events">
        <div className="wrap events-wrap">

          <div className="page-head">
            <span className="hud">Events</span>

            <h1>
              <span
                className="chroma"
                data-text="On the calendar"
              >
                On the calendar
              </span>
            </h1>

            <p>
              Jams, workshops, demo nights, and speaker sessions —
              open to all SIT students unless noted.
            </p>
          </div>

          <span className="hud">Upcoming</span>

          {upcoming.length === 0 ? (
            <p>No upcoming events.</p>
          ) : (
            upcoming.map((event) => renderEvent(event))
          )}

          <span className="hud">Past Events</span>

          {past.length === 0 ? (
            <p>No past events.</p>
          ) : (
            past.map((event) => renderEvent(event, true))
          )}

        </div>
      </section>
    </div>
  );
}