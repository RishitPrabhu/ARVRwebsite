import PageHead from '@/components/PageHead';
import RegisterButton from '@/components/RegisterButton';

export const metadata = { title: 'Events — XRGD Club | SIT Pune' };

export default function EventsPage() {
  return (
    <div className="page">
      <div className="wrap events-wrap">
        <PageHead eyebrow="Events" title="On the calendar">
          Jams, workshops, demo nights, and speaker sessions — open to all SIT students unless noted.
        </PageHead>

        <span className="hud">Upcoming</span>
        <div className="event-row featured">
          <div className="date-block"><div className="d">28</div><div className="m">JUN 2026</div></div>
          <div>
            <span className="tag">Flagship</span>
            <h3 style={{ marginTop: 8 }}>RealityJam 2026</h3>
            <p>
              Our annual 36-hour game jam. Theme revealed at kickoff; build a game or XR prototype in
              teams of 2–4. Judged on creativity, playability, and polish.
            </p>
            <div className="event-meta">
              📍 <span>Innovation Lab, SIT Lavale</span> · 🕘 <span>Sat 9:00 AM → Sun 9:00 PM</span> · 🏆{' '}
              <span>Prize pool + incubation slots</span>
            </div>
          </div>
          <RegisterButton className="btn btn-primary">Register</RegisterButton>
        </div>

        <div className="event-row">
          <div className="date-block"><div className="d">15</div><div className="m">JUL 2026</div></div>
          <div>
            <h3>Intro to Unity — Freshers&apos; Workshop</h3>
            <p>
              Zero-to-playable in three hours: scenes, physics, scripting basics, and building your
              first 3D mini-game. Laptops provided in lab.
            </p>
            <div className="event-meta">
              📍 <span>CS Lab 204</span> · 🕔 <span>5:00 PM – 8:00 PM</span> · 🎟{' '}
              <span>Free, no experience needed</span>
            </div>
          </div>
          <RegisterButton>Register</RegisterButton>
        </div>

        <div className="event-row">
          <div className="date-block"><div className="d">02</div><div className="m">AUG 2026</div></div>
          <div>
            <h3>XR Demo Night #5</h3>
            <p>
              Members demo works-in-progress on the club&apos;s Quest 3 units; open floor for feedback
              and playtesting. Snacks on us.
            </p>
            <div className="event-meta">📍 <span>XR Lab</span> · 🕕 <span>6:00 PM onwards</span></div>
          </div>
          <RegisterButton>RSVP</RegisterButton>
        </div>

        <span className="hud">Past Events</span>
        <div className="event-row" style={{ opacity: 0.75 }}>
          <div className="date-block"><div className="d">14</div><div className="m">MAR 2026</div></div>
          <div>
            <h3>Shader Bootcamp</h3>
            <p>
              Two-day deep dive into Shader Graph and HLSL — stylised water, dissolve effects, and toon
              shading. 60+ attendees.
            </p>
            <div className="event-meta">✅ <span>Completed</span> · Materials on club GitHub</div>
          </div>
        </div>
        <div className="event-row" style={{ opacity: 0.75 }}>
          <div className="date-block"><div className="d">31</div><div className="m">JAN 2026</div></div>
          <div>
            <h3>Industry Talk: Building for Quest</h3>
            <p>
              Guest session with a VR studio engineer on performance budgets, comfort design, and
              shipping to the Meta Store.
            </p>
            <div className="event-meta">✅ <span>Completed</span> · Recording on club YouTube</div>
          </div>
        </div>
        <div className="event-row" style={{ opacity: 0.75 }}>
          <div className="date-block"><div className="d">09</div><div className="m">NOV 2025</div></div>
          <div>
            <h3>RealityJam 2025</h3>
            <p>24 teams, 36 hours, theme &quot;Gravity Optional&quot;. Winner Orbital Decay later published on itch.io.</p>
            <div className="event-meta">✅ <span>Completed</span> · 96 participants</div>
          </div>
        </div>
      </div>
    </div>
  );
}
