import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <p>
          © 2026 XRGD — AR/VR &amp; Game Development Club, Symbiosis Institute of
          Technology, Pune.
          <br />
          Built by members, for members.
        </p>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
