"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types.ts";
import Link from "next/link";

type RouteParams = { params: Promise<{ project: string }> };

export default function ProjectDetails({ params }: Readonly<RouteParams>) {
  const selectedProject = params.then((params) => params.project);
  const [project, setProject] = useState<Project>({
    name: "placeholder name",
    description:
      "Sunt qui minim tempor Lorem excepteur aute incididunt sint ipsum voluptate. Sunt velit sit consectetur ex sunt eiusmod officia et do voluptate est sunt cupidatat in. Irure duis laborum voluptate esse labore sint.",
    imageUrl: "https://placehold.co/300x300",
    link: "",
  });

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/projects/${await selectedProject}`);
      const project = (await resp.json()) as Project;
      setProject(project);
    })();
  }, []);

  return (
    <main>
      <img className="m-4" src={project.imageUrl} alt="Project Screenshot" />
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <Link href="/">🠠 Back to all Projects</Link>
    </main>
  );
}
