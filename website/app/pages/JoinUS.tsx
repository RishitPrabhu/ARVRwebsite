export default function JoinUs(){
    return(
<section className="page" id="page-join">
  <div className="wrap">
    <div className="page-head">
      <span className="hud">Join the Club</span>
      <h1><span className="chroma" data-text="Press start">Press start</span></h1>
      <p>Open to every SIT student, every branch, every skill level. Fill the form and we'll invite you to the next onboarding session.</p>
    </div>
    <div className="join-grid">
      <div>
        <div className="perk"><div className="ic">🕶️</div><div><b>Hardware access</b><span>Quest 3 &amp; Quest 2 units, Leap Motion, and dedicated XR Lab hours every week.</span></div></div>
        <div className="perk"><div className="ic">🧑‍🏫</div><div><b>Mentored first project</b><span>Every newcomer is paired with a senior member htmlFor their first semester build.</span></div></div>
        <div className="perk"><div className="ic">🏆</div><div><b>Jams &amp; competitions</b><span>Priority slots htmlFor RealityJam and sponsored teams htmlFor inter-college hackathons.</span></div></div>
        <div className="perk"><div className="ic">📦</div><div><b>A real portfolio</b><span>Ship at least one playable project per semester, published on the club itch.io &amp; GitHub.</span></div></div>
        <div className="perk bottom-b-0"><div className="ic">🪪</div><div><b>Your page on this site</b><span>Active members get a profile on the Members page — photo, projects, and all.</span></div></div>
        <div className="steps">
          <h3>How recruitment works</h3>
          <ol>
            <li><b>Apply</b> with this form (2 minutes, no portfolio needed).</li>
            <li><b>Onboarding workshop</b> — a hands-on intro session in the lab.</li>
            <li><b>Mini build</b> — make one tiny thing in 2 weeks with a mentor.</li>
            <li><b>You're in.</b> Pick a track and join a project team.</li>
          </ol>
        </div>
      </div>
      <form id="joinForm">
        <div className="field"><label htmlFor="jName">Full name</label><input id="jName" type="text" placeholder="Your full name" required/></div>
        <div className="field"><label htmlFor="jEmail">College email</label><input id="jEmail" type="email" placeholder="prn@sitpune.edu.in" required/></div>
        <div className="field"><label htmlFor="jPrn">PRN / Roll number</label><input id="jPrn" type="text" placeholder="e.g. 23070123456" required/></div>
        <div className="field"><label htmlFor="jBranch">Branch &amp; year</label>
          <select id="jBranch">
            <option>Computer Science — 1st year</option>
            <option>Computer Science — 2nd year</option>
            <option>Computer Science — 3rd year</option>
            <option>AI &amp; ML</option>
            <option>E&amp;TC</option>
            <option>Mechanical</option>
            <option>Civil</option>
            <option>Robotics &amp; Automation</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field"><label>Tracks you're interested in</label>
          <div className="check-row">
            <label><input type="checkbox"/> Game Development</label>
            <label><input type="checkbox"/> Virtual Reality</label>
            <label><input type="checkbox"/> Augmented Reality</label>
            <label><input type="checkbox"/> 3D Art &amp; Design</label>
            <label><input type="checkbox"/> Audio / Music</label>
          </div>
        </div>
        <div className="field"><label htmlFor="jExp">Experience level</label>
          <select id="jExp">
            <option>Complete beginner — and that's fine</option>
            <option>Played with an engine a little</option>
            <option>Built a small game or demo</option>
            <option>Shipped projects before</option>
          </select>
        </div>
        <div className="field"><label htmlFor="jWhy">Why do you want to join? <span className="text-[var(--dim)] normal-case tracking-normal">(optional)</span></label>
          <textarea id="jWhy" placeholder="A game you love, a thing you want to build, anything…"></textarea>
        </div>
        <button className="btn btn-primary w-full justify-center" type="submit">Submit Application →</button>
        <p id="joinMsg" className="hidden mt-4 font-[var(--mono)] text-[12.5px] text-[#5BFF8A] tracking-[0.05em]">✓ APPLICATION RECEIVED — check your inbox htmlFor the onboarding invite.</p>
      </form>
    </div>
  </div>
</section>

    );
}