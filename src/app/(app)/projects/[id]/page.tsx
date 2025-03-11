import { generateMetadataFromBE } from "@/app/lib/utils";
import type { Metadata } from "next";
import ProjectDetails from "../components/ProjectDetails";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const Id = (await params).id;
  return await generateMetadataFromBE(`projects/${Id}`);
}
export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectDetails params={params} />;
}