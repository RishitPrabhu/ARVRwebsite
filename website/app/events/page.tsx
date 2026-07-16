"use client";
import Navbar from "../components/navbar";





export default function EventsPage(){


    const handleNext = () => {
        alert('Registration form goes here — link your Google Form or campus portal.');
    };

    return (
      <div className="">
        <Navbar/>
        <section className="page visible" id="page-events">
  <div className="wrap events-wrap">
    <div className="page-head">
      <span className="hud">Events</span>
      <h1><span className="chroma" data-text="On the calendar">On the calendar</span></h1>
      <p>Jams, workshops, demo nights, and speaker sessions — open to all SIT students unless noted.</p>
    </div>

    <span className="hud">Upcoming</span>
    <div className="event-row featured">
      <div className="date-block"><div className="d">28</div><div className="m">JUN 2026</div></div>
      <div>
        <span className="tag">Flagship</span>
        <h3 className="mt-[8px]">RealityJam 2026</h3>
        <p>Our annual 36-hour game jam. Theme revealed at kickoff; build a game or XR prototype in teams of 2–4. Judged on creativity, playability, and polish.</p>
        <div className="event-meta">📍 <span>Innovation Lab, SIT Lavale</span> · 🕘 <span>Sat 9:00 AM → Sun 9:00 PM</span> · 🏆 <span>Prize pool + incubation slots</span></div>
      </div>
      <button className="btn btn-primary" onClick={handleNext}>Register</button>
    </div>
    <div className="event-row">
      <div className="date-block"><div className="d">15</div><div className="m">JUL 2026</div></div>
      <div>
        <h3>Intro to Unity — Freshers' Workshop</h3>
        <p>Zero-to-playable in three hours: scenes, physics, scripting basics, and building your first 3D mini-game. Laptops provided in lab.</p>
        <div className="event-meta">📍 <span>CS Lab 204</span> · 🕔 <span>5:00 PM – 8:00 PM</span> · 🎟 <span>Free, no experience needed</span></div>
      </div>
      <button className="btn btn-ghost" onClick={handleNext}>Register</button>
    </div>
    <div className="event-row">
      <div className="date-block"><div className="d">02</div><div className="m">AUG 2026</div></div>
      <div>
        <h3>XR Demo Night #5</h3>
        <p>Members demo works-in-progress on the club's Quest 3 units; open floor for feedback and playtesting. Snacks on us.</p>
        <div className="event-meta">📍 <span>XR Lab</span> · 🕕 <span>6:00 PM onwards</span></div>
      </div>
      <button className="btn btn-ghost" onClick={handleNext}>RSVP</button>
    </div>

    <span className="hud">Past Events</span>
    <div className="event-row opacity-75">
      <div className="date-block"><div className="d">14</div><div className="m">MAR 2026</div></div>
      <div>
        <h3>Shader Bootcamp</h3>
        <p>Two-day deep dive into Shader Graph and HLSL — stylised water, dissolve effects, and toon shading. 60+ attendees.</p>
        <div className="event-meta">✅ <span>Completed</span> · Materials on club GitHub</div>
      </div>
    </div>
    <div className="event-row opacity-75">
      <div className="date-block"><div className="d">31</div><div className="m">JAN 2026</div></div>
      <div>
        <h3>Industry Talk: Building for Quest</h3>
        <p>Guest session with a VR studio engineer on performance budgets, comfort design, and shipping to the Meta Store.</p>
        <div className="event-meta">✅ <span>Completed</span> · Recording on club YouTube</div>
      </div>
    </div>
    <div className="event-row opacity-75">
      <div className="date-block"><div className="d">09</div><div className="m">NOV 2025</div></div>
      <div>
        <h3>RealityJam 2025</h3>
        <p>24 teams, 36 hours, theme "Gravity Optional". Winner Orbital Decay later published on itch.io.</p>
        <div className="event-meta">✅ <span>Completed</span> · 96 participants</div>
      </div>
    </div>
  </div>
</section>

      </div>
    );
}