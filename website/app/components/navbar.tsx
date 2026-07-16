import Image from "next/image";
import Link from 'next/link';

import HomePage from "../pages/HomePage";
import AboutUS from "../pages/AboutUsPage";
import MembersPage from "../pages/MembersPage";
import ProjectsPage from "../pages/ProjectsPage";
import EventsPage from "../pages/Events/EventsPage";
import ContactUS from "../pages/ContactUSPage";
import JoinUs from "../pages/JoinUS";


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
    <li><Link href="/">Home</Link></li>
    <li><Link href="/Events/EventsPage">Events</Link></li>
    <li><Link href="/">Members</Link></li>
    <li><Link href="/">Projects</Link></li>
    <li><Link href="/">Contact Us</Link></li>
    <li><Link href="/">Join</Link></li>
  </ul>
</nav>
  );
}
