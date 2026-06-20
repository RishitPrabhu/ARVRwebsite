import PageHead from '@/components/PageHead';

export const metadata = { title: 'Projects — XRGD Club | SIT Pune' };

const PROJECTS = [
  { thumb: 't1', glyph: '🧭', status: ['live', '● Live on campus'], title: 'Campus AR Navigator',
    desc: 'Markerless AR wayfinding for the SIT Lavale campus — point your phone and follow floating arrows to any lab, department, or canteen.',
    chips: ['ARCore', 'Unity', 'Geospatial API'] },
  { thumb: 't2', glyph: '🫀', status: ['dev', '● In development'], title: 'AnatomyVR',
    desc: 'A VR study tool that lets students walk around and disassemble life-size 3D anatomical models, built with the Biosciences department.',
    chips: ['Quest 3', 'Unity XR', 'Hand Tracking'] },
  { thumb: 't3', glyph: '🛰️', status: ['live', '● Playable on itch.io'], title: 'Orbital Decay',
    desc: '2.5D physics platformer set on a failing space station — winner of RealityJam 2025, polished and published post-jam by the original team.',
    chips: ['Godot', 'Pixel Art', 'FMOD'] },
  { thumb: 't2', glyph: '🃏', status: ['live', '● Live demo'], title: 'HoloDeck Cards',
    desc: 'A WebAR trading-card battler — scan printed cards and watch creatures rise off the table and fight. Runs in the browser, no app install.',
    chips: ['WebXR', 'three.js', '8th Wall'] },
  { thumb: 't1', glyph: '🏎️', status: ['dev', '● In development'], title: 'Velocity LAN',
    desc: "A 4-player split-screen and LAN arcade racer designed for the club's game nights — drift physics, item pickups, campus-inspired tracks.",
    chips: ['Unreal 5', 'Multiplayer', 'Blender'] },
  { thumb: 't3', glyph: '🧪', status: ['rnd', '● Research'], title: 'GestureForge',
    desc: 'An experimental toolkit mapping Leap Motion hand gestures to engine events — letting designers sculpt VR levels with bare hands.',
    chips: ['Leap Motion', 'C#', 'Unity Editor'] },
];

export default function ProjectsPage() {
  return (
    <div className="page">
      <div className="wrap">
        <PageHead eyebrow="Projects" title="Things we shipped">
          A selection of member-built games, AR tools, and VR experiences. Most are open source on the
          club GitHub.
        </PageHead>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div className="proj" key={i}>
              <div className={`proj-thumb ${p.thumb}`}>{p.glyph}</div>
              <div className="proj-body">
                <div className={`status ${p.status[0]}`}>{p.status[1]}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="chip-row">
                  {p.chips.map((c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
