"use client";

import Link from "next/link";
import { useEffect } from "react";

type RouteParams = { params: Promise<{ slug: string }> };

export default function BlogPost({ params }: Readonly<RouteParams>) {
  const _blogPostSlug = params.then((params) => params.slug);

  useEffect(() => {}, []);

  return (
    <main>
      <h1>Page in Development</h1>
      <p className="pb-6">...</p>
      <Link href="/">🠠 Back to homepage</Link>
    </main>
  );
}
