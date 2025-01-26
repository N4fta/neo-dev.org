"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types.ts";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/projects`);
      const allProjects = (await response.json()) as Project[];
      setProjects(allProjects);
    })();
  }, []);

  return (
    <main>
      <h1 className="pb-4">Hi! I'm Neo Dev 👋</h1>
      <h3 className="pb-12">
        Click on a <span className="text-primary">project</span> below to learn
        more.
      </h3>
      <div className="home-grid">
        {projects.map((project: Project) => {
          return (
            <div className="home-grid-item" key={project.name}>
              <img
                className="m-4"
                src={project.imageUrl}
                alt="Project Screenshot"
              />
              <div className="m-2">
                <Link href={`/${project.name.toLowerCase().replace(" ", "-")}`}>
                  {project.name}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-6" />
    </main>
  );
}
