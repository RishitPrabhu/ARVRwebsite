import PageHead from '@/components/PageHead';

export const metadata = { title: 'About Us — XRGD Club | SIT Pune' };

export default function AboutPage() {
  return (
    <div className="page">
      <div className="wrap">
        <PageHead eyebrow="About Us" title="Who we are">
          A student-run technical club at Symbiosis Institute of Technology, Pune, dedicated to
          immersive technologies and interactive media.
        </PageHead>

        <div className="about-grid">
          <div>
            <p>
              The <b>AR/VR &amp; Game Development Club (XRGD)</b> was founded in 2022 by a small group
              of students who wanted a place on campus to build games and experiment with headsets —
              not just talk about them. Today we are one of the most active technical clubs under{' '}
              <b>Symbiosis Institute of Technology (SIT), Pune</b>, operating under the umbrella of
              Symbiosis International (Deemed University).
            </p>
            <p>
              We run weekly build sessions, semester-long project teams, workshops on engines and
              tooling, and flagship events like <b>RealityJam</b>, our annual 36-hour game jam.
              Members work across the full pipeline — programming, 3D art, sound, UX for spatial
              interfaces, and playtesting.
            </p>
            <p>
              No prior experience is required to join. If you can attend the onboarding workshop and
              commit to one project a semester, you&apos;re in. We pair every newcomer with a senior
              mentor for their first build.
            </p>
            <ul className="domain-list">
              <li><b>Engines &amp; Frameworks</b><span>Unity · Unreal Engine 5 · Godot · <code>three.js / WebXR</code></span></li>
              <li><b>AR Toolkits</b><span>ARCore · ARKit · Vuforia · 8th Wall · <code>AR.js</code></span></li>
              <li><b>Hardware Lab</b><span>Meta Quest 3 · Quest 2 units · Leap Motion · 3D printers (via MakerSpace)</span></li>
              <li><b>Art &amp; Audio</b><span>Blender · Substance · Aseprite · FMOD · <code>FL Studio</code></span></li>
            </ul>
          </div>
          <div>
            <div className="vision-box">
              <h3>Mission</h3>
              <p>
                To give every SIT student the skills, hardware access, and team experience needed to
                ship real interactive and immersive products before they graduate.
              </p>
            </div>
            <div className="vision-box">
              <h3>Vision</h3>
              <p>
                To make SIT Pune a recognised student hub for XR and game development in India — a
                campus where the next generation of spatial computing is prototyped.
              </p>
            </div>
            <div className="vision-box">
              <h3>Values</h3>
              <p>Build in public. Playtest early. Teach what you learn. Credit every contributor. Finish the game.</p>
            </div>
          </div>
        </div>

        <div className="timeline">
          <span className="hud">Our Journey</span>
          <div style={{ marginTop: 30 }}>
            <div className="tl-item"><div className="yr">2022</div><div><h4>Founded</h4><p>Started as a 12-member game dev interest group with one shared Quest 2.</p></div></div>
            <div className="tl-item"><div className="yr">2023</div><div><h4>Official club status</h4><p>Recognised as an official technical club under SIT. First RealityJam held with 18 teams.</p></div></div>
            <div className="tl-item"><div className="yr">2024</div><div><h4>XR Lab access</h4><p>Secured dedicated lab hours and new headsets. Campus AR Navigator pilot launched.</p></div></div>
            <div className="tl-item"><div className="yr">2025</div><div><h4>First publications</h4><p>Two member projects showcased at national-level student tech fests; 25+ projects shipped overall.</p></div></div>
            <div className="tl-item"><div className="yr">2026</div><div><h4>Scaling up</h4><p>120+ members across three tracks. RealityJam 2026 opens to all SIT departments.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
