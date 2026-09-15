"use client";

import { useEffect, useState } from "react";
import { subscribeToTable } from "@/lib/supabase";

interface Member {
  id: string;
  name: string;
  role: string;
  team: string;
  bio: string | null;
  image_url: string | null;
  linkedin: string | null;
  github: string | null;
  website: string | null;
  email: string | null;
  display_order: number;
}

function getMemberImageUrl(imageUrl: string | null) {
  if (!imageUrl) {
    return "/icons/user.png";
  }

  const driveFileMatch = imageUrl.match(
    /drive\.google\.com\/file\/d\/([^/]+)/
  );

  if (driveFileMatch) {
    return `https://drive.google.com/thumbnail?id=${driveFileMatch[1]}&sz=w1000`;
  }

  return imageUrl;
}

export default function MembersPage() {
  const [faculty, setFaculty] = useState<Member[]>([]);
  const [core, setCore] = useState<Member[]>([]);
  const [volunteers, setVolunteers] = useState<Member[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToTable<Member>("members", (data) => {
      setFaculty(data.filter((member) => member.team === "Faculty"));
      setCore(data.filter((member) => member.team === "Core"));
      setVolunteers(data.filter((member) => member.team === "Volunteer"));
    }, {
      order: { column: "display_order", ascending: true },
    });

    return () => unsubscribe();
  }, []);

  function MemberCard(member: Member) {
    return (
      <article className="member-card" key={member.id}>
        <img
          src={getMemberImageUrl(member.image_url)}
          alt={member.name}
          className="member-photo"
        />

        <div className="member-content">
          <h3 className="member-name">{member.name}</h3>

          <p className="member-role">{member.role}</p>

          <p className="member-bio">
            {member.bio || "ARVR Club member"}
          </p>

          <div className="member-links">

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="member-link"
                aria-label={`${member.name} on LinkedIn`}
              >
                <img src="/icons/linkedin.png" alt="" width="24" height="24" />
              </a>
            )}

            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="member-link"
                aria-label={`${member.name} on GitHub`}
              >
                <img src="/icons/github.png" alt="" width="24" height="24" />
              </a>
            )}

            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noreferrer"
                className="member-link"
                aria-label={`${member.name}'s website`}
              >
                <img src="/icons/world-wide-web.png" alt="" width="24" height="24" />
              </a>
            )}

          </div>
        </div>
      </article>

    );
  }

  return (
    <div>
      <section className="page visible" id="page-members">
        <div className="wrap">

          <div className="page-head">
            <span className="hud">Members</span>

            <h1>
              <span
                className="chroma"
                data-text="The crew"
              >
                The crew
              </span>
            </h1>

            <p>
              Meet the faculty and core committee behind the
              ARVR Club.
            </p>
          </div>

          <div className="member-section">
            <span className="hud [--c:var(--amber)]">
              Faculty In-Charge
            </span>

            <div className="grid-4 mt-6">
              {faculty.map((member) => (
                <MemberCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          <div className="member-section mt-12">
            <span className="hud">
              Core Committee
            </span>

            <div className="grid-4 mt-6">
              {core.map((member) => (
                <MemberCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          <div className="member-section mt-12">
            <span className="hud">
              Volunteers
            </span>

            <div className="grid-4 mt-6">
              {volunteers.map((member) => (
                <MemberCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          <div className="member-section pb-[60px] mt-12">
            <span className="hud">
              Join Us
            </span>

            <div className="card mt-[24px] flex items-center justify-between gap-5 flex-wrap">
              <div>
                <h3>
                  Want your name on this page?
                </h3>

                <p>
                  Recruitment opens every semester. Participate
                  in our events and apply to become a member of
                  the ARVR Club.
                </p>
              </div>

              <a
                className="btn btn-primary"
                href="/join"
              >
                Apply Now →
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}