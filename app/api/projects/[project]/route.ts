import { NextRequest } from "next/server";
import data from "../data.json" with { type: "json" };

type RouteParams = { params: Promise<{ project: string }> };

export const GET = async (request: NextRequest, { params }: RouteParams) => {
  const { project } = await params;

  if (!project) {
    return Response.json("No project name provided.");
  }

  const projectData = data.find((item) =>
    item.name.toLowerCase() === project.toLowerCase()
  );

  return Response.json(projectData || "No project found.");
};
