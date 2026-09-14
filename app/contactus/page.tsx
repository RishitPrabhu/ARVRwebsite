"use client";

import { FormEvent } from "react";
import Navbar from "../components/navbar";

const CLUB_EMAIL = "arvrclub_cs@sitpune.edu.in";

export default function ContactUS()
{
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const name = String(formData.get("name") || "");
      const email = String(formData.get("email") || "");
      const topic = String(formData.get("topic") || "");
      const message = String(formData.get("message") || "");
      const subject = `${topic} - Contact from ${name}`;
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Topic: ${topic}`,
        "",
        "Message:",
        message,
      ].join("\n");

      window.location.href = `mailto:${CLUB_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

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
          <div className="ic"><img src="/icons/world-wide-web.png" alt="" /></div>
          <div><b>Find us on campus</b><span>CSE Department, 4th floor, Symbiosis Institute of Technology, Lavale, Pune, Maharashtra 412115</span></div>
        </div>
        <div className="row">
          <div className="ic"><img src="/icons/gmail.png" alt="" /></div>
          <div><b>Email</b><span>arvrclub_cs@sitpune.edu.in</span></div>
        </div>
        <div className="row">
          <div className="ic"><img src="/icons/discord.png" alt="" /></div>
          <div><b>Discord</b><span>Active build channels, jam teams, and help desks — invite link shared at onboarding.</span></div>
        </div>
        <div className="row">
          <div className="ic"><img src="/icons/github.png" alt="" /></div>
          <div><b>Socials</b><span>@arvrclubsit on Instagram · Projects on GitHub &amp; itch.io</span></div>
        </div>
        <div className="row border-b-0">
          <div className="ic"><img src="/icons/linkedin.png" alt="" /></div>
          <div><b>LinkedIn</b><span>Reach out to us on LinkedIn for professional connections and updates.</span></div>
        </div>
      </div>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="cName">Name</label>
          <input id="cName" name="name" type="text" placeholder="Your full name" required/>
        </div>
        <div className="field">
          <label htmlFor="cEmail">Email</label>
          <input id="cEmail" name="email" type="email" placeholder="you@sitpune.edu.in" required/>
        </div>
        <div className="field">
          <label htmlFor="cTopic">I'm reaching out about</label>
          <select id="cTopic" name="topic">
            <option>Joining the club</option>
            <option>RealityJam 2026</option>
            <option>Collaboration / sponsorship</option>
            <option>Project help</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="cMsg">Message</label>
          <textarea id="cMsg" name="message" placeholder="Tell us what's on your mind…" required></textarea>
        </div>
        <button className="btn btn-primary w-full justify-center" type="submit">Send Message →</button>
        <p id="formMsg">Your email app will open with the message ready to send.</p>
      </form>
    </div>
  </div>
</section>
      </div>
    );
}