import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import ProjectsList from "@/app/(app)/projects/service/ProjectsList";

const Projects = () => {
  return (
    <div>
      <PageHeader subHeading="Projects" heading="Our Portfolio" />
      <ProjectsList />
    </div>
  );
};

export default Projects;
