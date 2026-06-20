import PageHead from '@/components/PageHead';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact Us — XRGD Club | SIT Pune' };

export default function ContactPage() {
  return (
    <div className="page">
      <div className="wrap">
        <PageHead eyebrow="Contact Us" title="Ping us">
          Questions, collaborations, sponsorships, or just want to join — drop a message and a core
          member will reply within 48 hours.
        </PageHead>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="row">
              <div className="ic">📍</div>
              <div>
                <b>Find us on campus</b>
                <span>XR Lab / Innovation Lab, Symbiosis Institute of Technology, Lavale, Pune, Maharashtra 412115</span>
              </div>
            </div>
            <div className="row">
              <div className="ic">✉️</div>
              <div>
                <b>Email</b>
                <span>
                  xrgd.club@sitpune.edu.in{' '}
                  <i style={{ color: 'var(--dim)', fontStyle: 'normal' }}>(placeholder — replace with your official ID)</i>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="ic">💬</div>
              <div>
                <b>Discord</b>
                <span>Active build channels, jam teams, and help desks — invite link shared at onboarding.</span>
              </div>
            </div>
            <div className="row">
              <div className="ic">📸</div>
              <div>
                <b>Socials</b>
                <span>@xrgd.sitpune on Instagram · Club devlogs on YouTube · Projects on GitHub &amp; itch.io</span>
              </div>
            </div>
            <div className="row" style={{ borderBottom: 0 }}>
              <div className="ic">🕘</div>
              <div>
                <b>Open lab hours</b>
                <span>Tue &amp; Thu, 5–8 PM during semester. Walk in, put on a headset, ask anything.</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
