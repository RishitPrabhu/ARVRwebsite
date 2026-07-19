"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { supabase } from "@/lib/supabase";

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

export default function MembersPage() {
  const [faculty, setFaculty] = useState<Member[]>([]);
  const [core, setCore] = useState<Member[]>([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    const { data, error } = await supabase
      .from("members")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    setFaculty(
      data.filter((member) => member.team === "Faculty")
    );

    setCore(
      data.filter((member) => member.team === "Core")
    );
  }

  function MemberCard(member: Member) {
    return (
      <div className="card p-5" key={member.id}>
        <img
          src={
            member.image_url ??
            "https://placehold.co/300x300?text=Member"
          }
          alt={member.name}
          className="w-full aspect-square object-cover rounded-xl mb-4"
        />

        <h3>{member.name}</h3>

        <p className="text-sm opacity-70 mb-3">
          {member.role}
        </p>

        {member.bio && (
          <p className="text-sm mb-4">
            {member.bio}
          </p>
        )}

        <div className="flex gap-3 flex-wrap">

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
          )}

          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          )}

          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Website
            </a>
          )}

        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

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