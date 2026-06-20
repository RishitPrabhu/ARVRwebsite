import Link from 'next/link';
import PageHead from '@/components/PageHead';
import Avatar from '@/components/Avatar';
import { memberList } from '@/lib/members';

export const metadata = { title: 'Members — XRGD Club | SIT Pune' };

function MemberCard({ m }) {
  return (
    <Link
      href={`/members/${m.id}`}
      className={`member${m.faculty ? ' faculty' : ''}`}
      aria-label={`View profile of ${m.name}`}
    >
      <Avatar member={m} faculty={m.faculty} />
      <h4>{m.name}</h4>
      <div className="role">{m.role}</div>
      <p className="bio">{m.bio.split('. ')[0]}.</p>
      <div className="view-tag">View profile →</div>
    </Link>
  );
}

export default function MembersPage() {
  const all = memberList();
  const faculty = all.filter((m) => m.faculty);
  const core = all.filter((m) => !m.faculty);

  return (
    <div className="page">
      <div className="wrap">
        <PageHead eyebrow="Members" title="The crew">
          Core team for the 2025–26 academic year. Click any member to view their full profile. Names
          and photos are placeholders — swap in your real team.
        </PageHead>

        <div className="member-section">
          <span className="hud">Faculty In-Charge</span>
          <div className="grid-4">
            {faculty.map((m) => (
              <MemberCard key={m.id} m={m} />
            ))}
          </div>
        </div>

        <div className="member-section">
          <span className="hud">Core Committee</span>
          <div className="grid-4">
            {core.map((m) => (
              <MemberCard key={m.id} m={m} />
            ))}
          </div>
        </div>

        <div className="member-section" style={{ paddingBottom: 60 }}>
          <span className="hud">Join Us</span>
          <div
            className="card"
            style={{
              marginTop: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h3>Want your name on this page?</h3>
              <p>Recruitment opens at the start of every semester — and jam participation counts as a tryout.</p>
            </div>
            <Link className="btn btn-primary" href="/join">
              Apply Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
