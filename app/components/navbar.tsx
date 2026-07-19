import Image from "next/image";
import Link from 'next/link';

import HomePage from "../home/page";
import AboutUS from "../aboutus/page";
import MembersPage from "../members/page";
import ProjectsPage from "../projects/page";
import EventsPage from "../events/page";
import ContactUS from "../contactus/page";
import JoinUs from "../joinus/page";


export default function Navbar() {
  return (
    <nav>
  <div className="brand" data-nav="home">
    <div className="mark">XR</div>
    <div>
      <b>XRGD CLUB</b>
      <small>SYMBIOSIS INSTITUTE OF TECHNOLOGY</small>
    </div>
  </div>
  <button id="menuBtn" aria-label="Toggle menu">MENU</button>
  <ul className="nav-links" id="navLinks">
    <li><Link href="/home">Home</Link></li>
    <li><Link href="/aboutus">About Us</Link></li>
    <li><Link href="/events">Events</Link></li>
    <li><Link href="/members">Members</Link></li>
    <li><Link href="/projects">Projects</Link></li>
    <li><Link href="/contactus">Contact Us</Link></li>
    <li><Link href="/joinus">Join</Link></li>
    
  </ul>
</nav>
  );
}
