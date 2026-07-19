"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { supabase } from "@/lib/supabase";

interface Project {
  id: string;
  title: string;
  short_description: string;
  full_description: string | null;
  status: string;
  image_url: string | null;
  github_link: string | null;
  demo_link: string | null;
  team: string | null;
  technologies: string[];
  display_order: number;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("display_order");

    if (error) {
      console.error(error);
      return;
    }

    setProjects(data);
  }

  function statusClass(status: string) {
    switch (status) {
      case "Live":
        return "live";
      case "In Development":
        return "dev";
      case "Research":
        return "rnd";
      default:
        return "";
    }
  }

  return (
    <div>
      <Navbar />

      <section className="page visible" id="page-projects">
        <div className="wrap">

          <div className="page-head">
            <span className="hud">Projects</span>

            <h1>
              <span
                className="chroma"
                data-text="Things we shipped"
              >
                Things we shipped
              </span>
            </h1>

            <p>
              A selection of games, AR tools, VR experiences and
              research projects built by club members.
            </p>
          </div>

          <div className="proj-grid">

            {projects.map((project) => (

              <div className="proj" key={project.id}>

                <img
                  src={
                    project.image_url ??
                    "https://placehold.co/600x400?text=Project"
                  }
                  className="proj-thumb object-cover"
                  alt={project.title}
                />

                <div className="proj-body">

                  <div className={`status ${statusClass(project.status)}`}>
                    ● {project.status}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.short_description}</p>

                  <div className="chip-row">
                    {project.technologies?.map((tech) => (
                      <span className="chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-5">

                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        className="btn btn-ghost"
                      >
                        GitHub
                      </a>
                    )}

                    {project.demo_link && (
                      <a
                        href={project.demo_link}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Demo
                      </a>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </div>
  );
}