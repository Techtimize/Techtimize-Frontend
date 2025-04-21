import { generateMetadataFromBE } from "@/app/lib/utils";
import type { Metadata } from "next";
import ProjectDetails from "../components/ProjectDetails";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateMetadataFromBE(`projects/${slug}`);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const routeParams = await params
  return <ProjectDetails params={routeParams} />;
}
