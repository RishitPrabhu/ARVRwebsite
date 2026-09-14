"use client";

import { FormEvent } from "react";
import Navbar from "../components/navbar";

const CLUB_EMAIL = "arvrclub_cs@sitpune.edu.in";

export default function JoinUs(){
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const name = String(formData.get("name") || "");
      const email = String(formData.get("email") || "");
      const prn = String(formData.get("prn") || "");
      const branch = String(formData.get("branch") || "");
      const experience = String(formData.get("experience") || "");
      const tracks = formData.getAll("tracks").join(", ") || "None selected";
      const reason = String(formData.get("reason") || "Not provided");
      const subject = `Club application from ${name}`;
      const body = [
        `Full name: ${name}`,
        `College email: ${email}`,
        `PRN / Roll number: ${prn}`,
        `Branch & year: ${branch}`,
        `Tracks: ${tracks}`,
        `Experience level: ${experience}`,
        "",
        "Why they want to join:",
        reason,
      ].join("\n");

      window.location.href = `mailto:${CLUB_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return(
<div className="">
  <Navbar/>
  <section className="page visible" id="page-join">
  <div className="wrap">
    <div className="page-head">
      <span className="hud">Join the Club</span>
      <h1><span className="chroma" data-text="Press start">Press start</span></h1>
      <p>Open to every SIT student, every branch, every skill level. Fill the form and we'll invite you to the next onboarding session.</p>
    </div>
    <div className="join-grid">
      <div>
        <div className="perk"><div className="ic"><img src="/icons/world-wide-web.png" alt="" /></div><div><b>Hardware access</b><span>Meta Quest 3 and powerful development tools are waiting for you.</span></div></div>
        <div className="perk"><div className="ic"><img src="/icons/user.png" alt="" /></div><div><b>Mentored first project</b><span>Every newcomer is paired with a senior member for their first semester build.</span></div></div>
        <div className="perk"><div className="ic"><img src="/icons/event.png" alt="" /></div><div><b>Jams &amp; competitions</b><span>Priority slots for events and teams for inter-college hackathons.</span></div></div>
        <div className="perk"><div className="ic"><img src="/icons/github.png" alt="" /></div><div><b>A real portfolio</b><span>Ship at least one playable project per semester, published on the club itch.io and GitHub.</span></div></div>
        <div className="perk bottom-b-0"><div className="ic"><img src="/icons/member.png" alt="" /></div><div><b>Your page on this site</b><span>Active members get a profile on the Members page — photo, projects, and all.</span></div></div>
      </div>
      <form id="joinForm" onSubmit={handleSubmit}>
        <div className="form-intro">
          <span className="hud">Application uplink</span>
          <h3>Start building with us.</h3>
          <p>Your details open a pre-filled email to the club team.</p>
        </div>
        <div className="form-row">
          <div className="field"><label htmlFor="jName">Full name</label><input id="jName" name="name" type="text" placeholder="Your full name" required/></div>
          <div className="field"><label htmlFor="jEmail">College email</label><input id="jEmail" name="email" type="email" placeholder="Your College Email" required/></div>
        </div>
        <div className="form-row">
          <div className="field"><label htmlFor="jPrn">PRN / Roll number</label><input id="jPrn" name="prn" type="text" placeholder="e.g. 23070123456" required/></div>
          <div className="field"><label htmlFor="jBranch">Branch &amp; year</label>
            <select id="jBranch" name="branch">
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
        </div>
        <div className="field"><label>Tracks you're interested in</label>
          <div className="check-row">
            <label><input name="tracks" value="Game Development" type="checkbox"/> Game Development</label>
            <label><input name="tracks" value="Virtual Reality" type="checkbox"/> Virtual Reality</label>
            <label><input name="tracks" value="Augmented Reality" type="checkbox"/> Augmented Reality</label>
            <label><input name="tracks" value="3D Art & Design" type="checkbox"/> 3D Art &amp; Design</label>
            <label><input name="tracks" value="Audio / Music" type="checkbox"/> Audio / Music</label>
          </div>
        </div>
        <div className="field"><label htmlFor="jExp">Experience level</label>
          <select id="jExp" name="experience">
            <option>Complete beginner — and that's fine</option>
            <option>Played with an engine a little</option>
            <option>Built a small game or demo</option>
            <option>Shipped projects before</option>
          </select>
        </div>
        <div className="field"><label htmlFor="jWhy">Why do you want to join? <span className="text-[var(--dim)] normal-case tracking-normal">(optional)</span></label>
          <textarea id="jWhy" name="reason" placeholder="A game you love, a thing you want to build, anything…"></textarea>
        </div>
        <button className="btn btn-primary w-full justify-center" type="submit">Submit Application →</button>
        <p id="joinMsg" className="hidden mt-4 font-[var(--mono)] text-[12.5px] text-[#5BFF8A] tracking-[0.05em]">Your email app will open with the application ready to send.</p>
      </form>
    </div>
  </div>
</section>
</div>

    );
}