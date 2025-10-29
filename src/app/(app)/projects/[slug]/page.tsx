import { generateMetadataFromBE } from "@/app/lib/utils";
import type { Metadata } from "next";
import ProjectDetails from "../components/ProjectDetails";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;  
}): Promise<Metadata> {
  const { slug } = await params;
  const baseMetadata = await generateMetadataFromBE(`projects/${slug}`);
  const canonical = `https://techtimize.co/projects/${slug}`;

  return {
    ...baseMetadata,
    alternates: {
      // Keep only the canonical we explicitly set for project pages
      canonical,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const routeParams = await params
  return <ProjectDetails params={routeParams} />;
}
