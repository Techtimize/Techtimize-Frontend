import { generateMetadataFromBE } from "@/app/lib/utils";
import type { Metadata } from "next";
import ProjectDetails from  "../components/ProjectDetails";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  return generateMetadataFromBE(`projects/${id}`);
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectDetails params={params} />;
}
