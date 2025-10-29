import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import ProjectsList from "@/app/(app)/projects/components/service/ProjectsList";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";
export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/projects");

  const baseMetadata = await generateMetadataFromBE("projects");

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
  };
}
const Projects = () => {
  return (
    <div>
      <PageHeader subHeading="Projects" heading="Our Portfolio" />
      <ProjectsList />
    </div>
  );
};

export default Projects;
