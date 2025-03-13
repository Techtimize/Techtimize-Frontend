import { getProjects } from "@/app/api/projects/get_project";
import ProjectsFilter from "../components/ProjectFilter"; 

export default async function ProjectsList() {
  const projects = await getProjects();
  return <ProjectsFilter projects={projects} />;
}
