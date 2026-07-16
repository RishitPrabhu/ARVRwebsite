import Navbar from "../components/navbar";

export default function ContactUS()
{
    return(
      <div className="">
        <Navbar/>
        <section className="page visible" id="page-contact">
  <div className="wrap">
    <div className="page-head">
      <span className="hud">Contact Us</span>
      <h1><span className="chroma" data-text="Ping us">Ping us</span></h1>
      <p>Questions, collaborations, sponsorships, or just want to join — drop a message and a core member will reply within 48 hours.</p>
    </div>
    <div className="contact-grid">
      <div className="contact-info">
        <div className="row">
          <div className="ic">📍</div>
          <div><b>Find us on campus</b><span>XR Lab / Innovation Lab, Symbiosis Institute of Technology, Lavale, Pune, Maharashtra 412115</span></div>
        </div>
        <div className="row">
          <div className="ic">✉️</div>
          <div><b>Email</b><span>xrgd.club@sitpune.edu.in <i className="text-[var(--dim)] not-italic">(placeholder — replace with your official ID)</i></span></div>
        </div>
        <div className="row">
          <div className="ic">💬</div>
          <div><b>Discord</b><span>Active build channels, jam teams, and help desks — invite link shared at onboarding.</span></div>
        </div>
        <div className="row">
          <div className="ic">📸</div>
          <div><b>Socials</b><span>@xrgd.sitpune on Instagram · Club devlogs on YouTube · Projects on GitHub &amp; itch.io</span></div>
        </div>
        <div className="row border-b-0">
          <div className="ic">🕘</div>
          <div><b>Open lab hours</b><span>Tue &amp; Thu, 5–8 PM during semester. Walk in, put on a headset, ask anything.</span></div>
        </div>
      </div>
      <form id="contactForm">
        <div className="field">
          <label htmlFor="cName">Name</label>
          <input id="cName" type="text" placeholder="Your full name" required/>
        </div>
        <div className="field">
          <label htmlFor="cEmail">Email</label>
          <input id="cEmail" type="email" placeholder="you@sitpune.edu.in" required/>
        </div>
        <div className="field">
          <label htmlFor="cTopic">I'm reaching out about</label>
          <select id="cTopic">
            <option>Joining the club</option>
            <option>RealityJam 2026</option>
            <option>Collaboration / sponsorship</option>
            <option>Project help</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="cMsg">Message</label>
          <textarea id="cMsg" placeholder="Tell us what's on your mind…" required></textarea>
        </div>
        <button className="btn btn-primary w-full justify-center" type="submit">Send Message →</button>
        <p id="formMsg">✓ MESSAGE QUEUED — we'll get back to you within 48 hours.</p>
      </form>
    </div>
  </div>
</section>
      </div>
    );
}