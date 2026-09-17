"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav>
      <div className="brand" data-nav="home">
        <Link href="/home" aria-label="Go to ARVR Club home" onClick={closeMenu}>
          <img className="mark" src="/icons/LOGO.png" alt="ARVR Club" />
        </Link>
        <div>
          <b>ARVR CLUB</b>
          <small>SYMBIOSIS INSTITUTE OF TECHNOLOGY</small>
        </div>
      </div>
      <button
        id="menuBtn"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="navLinks"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>
      <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
        <li><Link href="/home" aria-label="Home" onClick={closeMenu}><span>Home</span></Link></li>
        <li><Link href="/aboutus" aria-label="About Us" onClick={closeMenu}><span>About Us</span></Link></li>
        <li><Link href="/events" aria-label="Events" onClick={closeMenu}><span>Events</span></Link></li>
        <li><Link href="/members" aria-label="Members" onClick={closeMenu}><span>Members</span></Link></li>
        <li><Link href="/projects" aria-label="Projects" onClick={closeMenu}><span>Projects</span></Link></li>
        <li><Link href="/contactus" aria-label="Contact Us" onClick={closeMenu}><span>Contact Us</span></Link></li>
        <li><Link href="/joinus" aria-label="Join" onClick={closeMenu}><span>Join</span></Link></li>
      </ul>
    </nav>
  );
}
