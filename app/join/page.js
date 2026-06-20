import PageHead from '@/components/PageHead';
import JoinForm from '@/components/JoinForm';

export const metadata = { title: 'Join the Club — XRGD Club | SIT Pune' };

export default function JoinPage() {
  return (
    <div className="page">
      <div className="wrap">
        <PageHead eyebrow="Join the Club" title="Press start">
          Open to every SIT student, every branch, every skill level. Fill the form and we&apos;ll
          invite you to the next onboarding session.
        </PageHead>

        <div className="join-grid">
          <div>
            <div className="perk"><div className="ic">🕶️</div><div><b>Hardware access</b><span>Quest 3 &amp; Quest 2 units, Leap Motion, and dedicated XR Lab hours every week.</span></div></div>
            <div className="perk"><div className="ic">🧑‍🏫</div><div><b>Mentored first project</b><span>Every newcomer is paired with a senior member for their first semester build.</span></div></div>
            <div className="perk"><div className="ic">🏆</div><div><b>Jams &amp; competitions</b><span>Priority slots for RealityJam and sponsored teams for inter-college hackathons.</span></div></div>
            <div className="perk"><div className="ic">📦</div><div><b>A real portfolio</b><span>Ship at least one playable project per semester, published on the club itch.io &amp; GitHub.</span></div></div>
            <div className="perk" style={{ borderBottom: 0 }}><div className="ic">🪪</div><div><b>Your page on this site</b><span>Active members get a profile on the Members page — photo, projects, and all.</span></div></div>

            <div className="steps">
              <h3>How recruitment works</h3>
              <ol>
                <li><b>Apply</b> with this form (2 minutes, no portfolio needed).</li>
                <li><b>Onboarding workshop</b> — a hands-on intro session in the lab.</li>
                <li><b>Mini build</b> — make one tiny thing in 2 weeks with a mentor.</li>
                <li><b>You&apos;re in.</b> Pick a track and join a project team.</li>
              </ol>
            </div>
          </div>

          <JoinForm />
        </div>
      </div>
    </div>
  );
}
