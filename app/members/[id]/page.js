import Link from 'next/link';
import { notFound } from 'next/navigation';
import Avatar from '@/components/Avatar';
import { getMember, MEMBERS } from '@/lib/members';

// Pre-render every member page at build time
export function generateStaticParams() {
  return Object.keys(MEMBERS).map((id) => ({ id }));
}

export function generateMetadata({ params }) {
  const m = getMember(params.id);
  if (!m) return { title: 'Member not found — XRGD Club' };
  return { title: `${m.name} — XRGD Club | SIT Pune` };
}

export default function MemberProfilePage({ params }) {
  const m = getMember(params.id);
  if (!m) notFound();

  return (
    <div className="page">
      <div className="wrap">
        <Link className="profile-back" href="/members">
          ← BACK TO MEMBERS
        </Link>

        <div className="profile-card">
          <div className="profile-left">
            <Avatar member={m} size={170} faculty={m.faculty} />
            <h2>{m.name}</h2>
            <div className="role">{m.role}</div>
            <div className="profile-stats">
              <div className="ps"><b>Age</b><span>{m.age}</span></div>
              <div className="ps"><b>Branch</b><span>{m.branch}</span></div>
              <div className="ps"><b>Year</b><span>{m.year}</span></div>
              <div className="ps"><b>Projects</b><span>{m.projects.length}</span></div>
            </div>
          </div>

          <div className="profile-right">
            <span className="hud">Quote</span>
            <div className="quote">{m.quote}</div>

            <span className="hud">About</span>
            <p className="profile-bio">{m.bio}</p>

            <span className="hud">Projects Built</span>
            <div className="proj-mini">
              {m.projects.map((p, i) => (
                <div className="pm" key={i}>
                  <div className="g">{p.g}</div>
                  <div>
                    <h4>{p.t}</h4>
                    <p>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 30 }}>
              <span className="hud">Toolkit</span>
              <div className="profile-skills" style={{ marginTop: 14 }}>
                {m.skills.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
