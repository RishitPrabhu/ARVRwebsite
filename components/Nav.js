'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/members', label: 'Members' },
  { href: '/projects', label: 'Projects' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav>
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <div className="mark">XR</div>
        <div>
          <b>XRGD CLUB</b>
          <small>SYMBIOSIS INSTITUTE OF TECHNOLOGY</small>
        </div>
      </Link>

      <button id="menuBtn" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
        MENU
      </button>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={isActive(l.href) ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/join"
            className={`join-link${isActive('/join') ? ' active' : ''}`}
            onClick={() => setOpen(false)}
          >
            Join
          </Link>
        </li>
      </ul>
    </nav>
  );
}
