import { generateMetadataFromBE } from "@/app/lib/utils";
import type { Metadata } from "next";
import ProjectDetails from "../components/ProjectDetails";
import { projectsData } from "@/app/constants/portfolioData"; 

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params; 
  return await generateMetadataFromBE(`projects/${id}`);
}

export default function ProjectPage({ params }: { params: { _id: string } }) {
  const project = projectsData.find((project) => project.id === parseInt(params._id)); 
  if (!project) {
    return <div>Project not found</div>;
  }
  return <ProjectDetails projectsData={project} />;
}
