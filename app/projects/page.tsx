import Navbar from "../components/navbar";

export default function ProjectsPage(){
    return(
        <div className="">
          <Navbar/>
          <section className="page visible" id="page-projects">
  <div className="wrap">
    <div className="page-head">
      <span className="hud">Projects</span>
      <h1><span className="chroma" data-text="Things we shipped">Things we shipped</span></h1>
      <p>A selection of member-built games, AR tools, and VR experiences. Most are open source on the club GitHub.</p>
    </div>
    <div className="proj-grid">
      <div className="proj">
        <div className="proj-thumb t1">🧭</div>
        <div className="proj-body">
          <div className="status live">● Live on campus</div>
          <h3>Campus AR Navigator</h3>
          <p>Markerless AR wayfinding for the SIT Lavale campus — point your phone and follow floating arrows to any lab, department, or canteen.</p>
          <div className="chip-row"><span className="chip">ARCore</span><span className="chip">Unity</span><span className="chip">Geospatial API</span></div>
        </div>
      </div>
      <div className="proj">
        <div className="proj-thumb t2">🫀</div>
        <div className="proj-body">
          <div className="status dev">● In development</div>
          <h3>AnatomyVR</h3>
          <p>A VR study tool that lets students walk around and disassemble life-size 3D anatomical models, built with the Biosciences department.</p>
          <div className="chip-row"><span className="chip">Quest 3</span><span className="chip">Unity XR</span><span className="chip">Hand Tracking</span></div>
        </div>
      </div>
      <div className="proj">
        <div className="proj-thumb t3">🛰️</div>
        <div className="proj-body">
          <div className="status live">● Playable on itch.io</div>
          <h3>Orbital Decay</h3>
          <p>2.5D physics platformer set on a failing space station — winner of RealityJam 2025, polished and published post-jam by the original team.</p>
          <div className="chip-row"><span className="chip">Godot</span><span className="chip">Pixel Art</span><span className="chip">FMOD</span></div>
        </div>
      </div>
      <div className="proj">
        <div className="proj-thumb t2">🃏</div>
        <div className="proj-body">
          <div className="status live">● Live demo</div>
          <h3>HoloDeck Cards</h3>
          <p>A WebAR trading-card battler — scan printed cards and watch creatures rise off the table and fight. Runs in the browser, no app install.</p>
          <div className="chip-row"><span className="chip">WebXR</span><span className="chip">three.js</span><span className="chip">8th Wall</span></div>
        </div>
      </div>
      <div className="proj">
        <div className="proj-thumb t1">🏎️</div>
        <div className="proj-body">
          <div className="status dev">● In development</div>
          <h3>Velocity LAN</h3>
          <p>A 4-player split-screen and LAN arcade racer designed for the club's game nights — drift physics, item pickups, campus-inspired tracks.</p>
          <div className="chip-row"><span className="chip">Unreal 5</span><span className="chip">Multiplayer</span><span className="chip">Blender</span></div>
        </div>
      </div>
      <div className="proj">
        <div className="proj-thumb t3">🧪</div>
        <div className="proj-body">
          <div className="status rnd">● Research</div>
          <h3>GestureForge</h3>
          <p>An experimental toolkit mapping Leap Motion hand gestures to engine events — letting designers sculpt VR levels with bare hands.</p>
          <div className="chip-row"><span className="chip">Leap Motion</span><span className="chip">C#</span><span className="chip">Unity Editor</span></div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>

    );
}