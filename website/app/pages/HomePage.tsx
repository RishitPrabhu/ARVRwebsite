import Link from 'next/link';



export default function HomePage(){
    return(
<section className="page visible" id="page-home">
  <div id="hero">
    <canvas id="three-canvas"></canvas>
    <div className="hero-frame"><i></i><i></i><i></i><i></i></div>
    <div className="hero-telemetry">
      FOV <span>110°</span> · IPD <span>63.5mm</span><br/>
      RENDER <span>WEBGL · 60FPS</span><br/>
      SESSION <span id="heroClock">--:--:--</span>
    </div>
    <div className="wrap hero-inner">
      <div className="hero-eyebrow">// AR · VR · Game Development</div>
      <h1>
        <span className="chroma" data-text="BUILD WORLDS.">BUILD WORLDS.</span><br/>
        <span className="alt">BREAK REALITY.</span>
      </h1>
      <p className="hero-sub">
        The official AR/VR &amp; Game Development Club of Symbiosis Institute of Technology, Pune —
        where students design immersive experiences, ship playable games, and prototype the spatial web.
      </p>
      <div className="hero-cta">
        <a className="btn btn-primary" href="#join" data-nav="join">Join the Club →</a>
        <a className="btn btn-ghost" href="#projects" data-nav="projects">Explore Projects</a>
      </div>
    </div>
    <div className="scroll-hint">SCROLL ▾</div>
  </div>

  <div className="upcoming">
    <div className="wrap">
      <span className="hud">Upcoming Event</span>
      <div className="upcoming-card mt-[26px]">
        <div className="date-block">
          <div className="d">28</div>
          <div className="m">JUN 2026</div>
        </div>
        <div>
          <span className="tag">Flagship · 36-Hour Jam</span>
          <h3>RealityJam 2026 — Annual Game Jam</h3>
          <p>36 hours. One theme, revealed on the spot. Teams of 2–4 build a playable game or XR prototype
             from scratch — Unity, Unreal, Godot, or WebXR. Open to all SIT students, beginners welcome.
             Venue: Innovation Lab, SIT Lavale Campus.</p>
        </div>
        <div>
          <div className="countdown" id="countdown" aria-label="Countdown to RealityJam 2026">
            <div className="cd-unit"><div className="n" id="cdD">--</div><div className="l">Days</div></div>
            <div className="cd-unit"><div className="n" id="cdH">--</div><div className="l">Hrs</div></div>
            <div className="cd-unit"><div className="n" id="cdM">--</div><div className="l">Min</div></div>
            <div className="cd-unit"><div className="n" id="cdS">--</div><div className="l">Sec</div></div>
          </div>
          <a className="btn btn-primary mt-[18px] w-full justify-center" href="#events" data-nav="events">Register Interest</a>
        </div>
      </div>
    </div>
  </div>


  <div className="pillars">
    <div className="wrap">
      <span className="hud">What We Do</span>
      <h2 className="[clamp(28px,4vw,40px)] mt-[14px]">Three tracks, one playground.</h2>
      <div className="grid-3">
        <div className="card">
          <div className="glyph">🕶️</div>
          <h3>Virtual Reality</h3>
          <p>Full-immersion experiences on Quest and PCVR — locomotion systems, hand tracking, spatial audio, and VR interaction design built in Unity and Unreal.</p>
        </div>
        <div className="card">
          <div className="glyph">📱</div>
          <h3>Augmented Reality</h3>
          <p>Marker-based and markerless AR for mobile and web — ARCore, ARKit, WebXR, and campus-scale AR navigation and visualisation projects.</p>
        </div>
        <div className="card">
          <div className="glyph">🎮</div>
          <h3>Game Development</h3>
          <p>From pixel-art platformers to multiplayer prototypes — gameplay programming, level design, shaders, game art, and publishing on itch.io.</p>
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
</section>
    );
}