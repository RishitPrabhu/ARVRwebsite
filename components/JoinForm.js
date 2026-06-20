'use client';

import { useState } from 'react';

const TRACKS = ['Game Development', 'Virtual Reality', 'Augmented Reality', '3D Art & Design', 'Audio / Music'];

export default function JoinForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 7000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="jName">Full name</label>
        <input id="jName" type="text" placeholder="Your full name" required />
      </div>
      <div className="field">
        <label htmlFor="jEmail">College email</label>
        <input id="jEmail" type="email" placeholder="prn@sitpune.edu.in" required />
      </div>
      <div className="field">
        <label htmlFor="jPrn">PRN / Roll number</label>
        <input id="jPrn" type="text" placeholder="e.g. 23070123456" required />
      </div>
      <div className="field">
        <label htmlFor="jBranch">Branch &amp; year</label>
        <select id="jBranch" defaultValue="Computer Science — 1st year">
          <option>Computer Science — 1st year</option>
          <option>Computer Science — 2nd year</option>
          <option>Computer Science — 3rd year</option>
          <option>AI &amp; ML</option>
          <option>E&amp;TC</option>
          <option>Mechanical</option>
          <option>Civil</option>
          <option>Robotics &amp; Automation</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label>Tracks you&apos;re interested in</label>
        <div className="check-row">
          {TRACKS.map((track, i) => (
            <label key={track}>
              <input type="checkbox" defaultChecked={i === 0} /> {track}
            </label>
          ))}
        </div>
      </div>
      <div className="field">
        <label htmlFor="jExp">Experience level</label>
        <select id="jExp" defaultValue="Complete beginner — and that's fine">
          <option>Complete beginner — and that&apos;s fine</option>
          <option>Played with an engine a little</option>
          <option>Built a small game or demo</option>
          <option>Shipped projects before</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="jWhy">
          Why do you want to join?{' '}
          <span style={{ color: 'var(--dim)', textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
        </label>
        <textarea id="jWhy" placeholder="A game you love, a thing you want to build, anything…" />
      </div>
      <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
        Submit Application →
      </button>
      {sent && (
        <p style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 12.5, color: '#5BFF8A', letterSpacing: '.05em' }}>
          ✓ APPLICATION RECEIVED — check your inbox for the onboarding invite.
        </p>
      )}
    </form>
  );
}
