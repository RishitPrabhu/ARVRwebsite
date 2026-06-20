'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const JAM_DATE = new Date('2026-06-28T09:00:00+05:30').getTime();

function diffParts() {
  let diff = Math.max(0, JAM_DATE - Date.now());
  const d = Math.floor(diff / 864e5);
  const h = Math.floor((diff % 864e5) / 36e5);
  const m = Math.floor((diff % 36e5) / 6e4);
  const s = Math.floor((diff % 6e4) / 1e3);
  return { d, h, m, s };
}

const pad = (n) => String(n).padStart(2, '0');

export default function Countdown() {
  // Start null so server and first client render match (avoids hydration mismatch)
  const [t, setT] = useState(null);

  useEffect(() => {
    setT(diffParts());
    const id = setInterval(() => setT(diffParts()), 1000);
    return () => clearInterval(id);
  }, []);

  const cell = (val, label) => (
    <div className="cd-unit">
      <div className="n">{t ? pad(val) : '--'}</div>
      <div className="l">{label}</div>
    </div>
  );

  return (
    <div>
      <div className="countdown" aria-label="Countdown to RealityJam 2026">
        {cell(t?.d, 'Days')}
        {cell(t?.h, 'Hrs')}
        {cell(t?.m, 'Min')}
        {cell(t?.s, 'Sec')}
      </div>
      <Link
        className="btn btn-primary"
        style={{ marginTop: 18, width: '100%', justifyContent: 'center' }}
        href="/events"
      >
        Register Interest
      </Link>
    </div>
  );
}
