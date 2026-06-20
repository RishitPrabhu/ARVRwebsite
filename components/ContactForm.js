'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="cName">Name</label>
        <input id="cName" type="text" placeholder="Your full name" required />
      </div>
      <div className="field">
        <label htmlFor="cEmail">Email</label>
        <input id="cEmail" type="email" placeholder="you@sitpune.edu.in" required />
      </div>
      <div className="field">
        <label htmlFor="cTopic">I&apos;m reaching out about</label>
        <select id="cTopic" defaultValue="Joining the club">
          <option>Joining the club</option>
          <option>RealityJam 2026</option>
          <option>Collaboration / sponsorship</option>
          <option>Project help</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="cMsg">Message</label>
        <textarea id="cMsg" placeholder="Tell us what's on your mind…" required />
      </div>
      <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
        Send Message →
      </button>
      {sent && (
        <p style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 12.5, color: '#5BFF8A', letterSpacing: '.05em' }}>
          ✓ MESSAGE QUEUED — we&apos;ll get back to you within 48 hours.
        </p>
      )}
    </form>
  );
}
