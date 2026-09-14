import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
  <div className="brand" data-nav="home">
    <Link href="/home" aria-label="Go to ARVR Club home">
      <img className="mark" src="/icons/LOGO.png" alt="ARVR Club" />
    </Link>
    <div>
      <b>ARVR CLUB</b>
      <small>SYMBIOSIS INSTITUTE OF TECHNOLOGY</small>
    </div>
  </div>
  <button id="menuBtn" aria-label="Toggle menu">MENU</button>
  <ul className="nav-links" id="navLinks">
    <li><Link href="/home" aria-label="Home"><img src="/icons/home.png" alt="" /><span>Home</span></Link></li>
    <li><Link href="/aboutus" aria-label="About Us"><img src="/icons/about-us.png" alt="" /><span>About Us</span></Link></li>
    <li><Link href="/events" aria-label="Events"><img src="/icons/event.png" alt="" /><span>Events</span></Link></li>
    <li><Link href="/members" aria-label="Members"><img src="/icons/member.png" alt="" /><span>Members</span></Link></li>
    <li><Link href="/projects" aria-label="Projects"><img src="/icons/projects.png" alt="" /><span>Projects</span></Link></li>
    <li><Link href="/contactus" aria-label="Contact Us"><img src="/icons/call.png" alt="" /><span>Contact Us</span></Link></li>
    <li><Link href="/joinus" aria-label="Join"><img src="/icons/join-us.png" alt="" /><span>Join</span></Link></li>
    
  </ul>
</nav>
  );
}
