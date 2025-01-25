"use client";

import { useEffect, useState } from "react";
import { Dino } from "@/types.ts";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs`);
      const allDinosaurs = (await response.json()) as Dino[];
      setDinosaurs(allDinosaurs);
    })();
  }, []);

  return (
    <main>
      <img className="m-4" src="https://placehold.co/500x300" />
      <h1>Welcome to the Dinosaur app</h1>
      <h3>Click on a dinosaur below to learn more.</h3>
      <div className="h-6" />
      <ul>
        {dinosaurs.map((dinosaur: Dino) => {
          return (
            <li key={dinosaur.name}>
              <Link href={`/${dinosaur.name.toLowerCase()}`}>
                {dinosaur.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
