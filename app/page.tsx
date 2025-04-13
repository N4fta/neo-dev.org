"use client";

import { useEffect, useState } from "react";
import { Project } from "@/app/types";

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
    <main className="p-8">
      <h1 className="pb-4">Hi! I&apos;m Neo Dev 👋</h1>
      <h3 className="pb-12">
        This website is a work in progress, for now you can think of it as place
        for all my links.
      </h3>
      <div className="home-grid"></div>
      <div className="h-6" />
    </main>
  );
}
