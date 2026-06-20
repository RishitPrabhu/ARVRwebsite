import Link from 'next/link';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Upcoming Event */}
      <div className="upcoming">
        <div className="wrap">
          <span className="hud">Upcoming Event</span>
          <div className="upcoming-card" style={{ marginTop: 26 }}>
            <div className="date-block">
              <div className="d">28</div>
              <div className="m">JUN 2026</div>
            </div>
            <div>
              <span className="tag">Flagship · 36-Hour Jam</span>
              <h3>RealityJam 2026 — Annual Game Jam</h3>
              <p>
                36 hours. One theme, revealed on the spot. Teams of 2–4 build a playable game or XR
                prototype from scratch — Unity, Unreal, Godot, or WebXR. Open to all SIT students,
                beginners welcome. Venue: Innovation Lab, SIT Lavale Campus.
              </p>
            </div>
            <Countdown />
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="pillars">
        <div className="wrap">
          <span className="hud">What We Do</span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', marginTop: 14 }}>
            Three tracks, one playground.
          </h2>
          <div className="grid-3">
            <div className="card">
              <div className="glyph">🕶️</div>
              <h3>Virtual Reality</h3>
              <p>
                Full-immersion experiences on Quest and PCVR — locomotion systems, hand tracking,
                spatial audio, and VR interaction design built in Unity and Unreal.
              </p>
            </div>
            <div className="card">
              <div className="glyph">📱</div>
              <h3>Augmented Reality</h3>
              <p>
                Marker-based and markerless AR for mobile and web — ARCore, ARKit, WebXR, and
                campus-scale AR navigation and visualisation projects.
              </p>
            </div>
            <div className="card">
              <div className="glyph">🎮</div>
              <h3>Game Development</h3>
              <p>
                From pixel-art platformers to multiplayer prototypes — gameplay programming, level
                design, shaders, game art, and publishing on itch.io.
              </p>
            </div>
          </div>
          <div className="stats-strip">
            <div className="stat"><div className="n">120<em>+</em></div><div className="l">Active Members</div></div>
            <div className="stat"><div className="n">25<em>+</em></div><div className="l">Projects Shipped</div></div>
            <div className="stat"><div className="n">14</div><div className="l">Events Hosted</div></div>
            <div className="stat"><div className="n">6</div><div className="l">Hackathon Wins</div></div>
          </div>
        </div>
      </div>
    </>
  );
}
