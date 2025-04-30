import PageHeader from "@/app/components/PageHeader/PageHeader";
import PortfolioSlider from "@/app/components/PortfolioSlider/PortfolioSlider";
import Image from "next/image";
import { getProjects } from "@/app/api/projects/get_project";
import projectsProps from "@/app/types/project.type";

export default async function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const projectsData = await getProjects();
  const project: projectsProps | undefined = projectsData.find(
    (proj) => proj.slug === params.slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <PageHeader heading="Project Detail" subHeading="Projects" />
      <div className="md:px-[10%] px-[5%] py-[50px]">
        <Image
          src={project.posterImage}
          alt="project"
          width={1026}
          height={675}
          unoptimized
          className="w-full lg:mb-[3%] mb-[10%] rounded-[10px]"
        />
        <h4 className="lg:text-[31px] text-[25px] text-black">
          {project.name}
        </h4>
        <hr className="lg:mt-[40px] lg:mb-[40px] sm:mt-[8%] sm:mb-[5%] mt-[15%] mb-[10%] h-[2px] bg-[#D9D9D9]" />
        <h5 className="lg:text-[25px] sm:text-[20px] md:mb-[2%] mb-[5%] text-black">
          About Project
        </h5>
        <p className="lg:text-[16px] text-[14px] text-projectDetails py-1">
          {project.about}
        </p>
      </div>

      <div className="bg-[#FBFCFF] pl-[5%] py-[40px]">
        <h2 className="lg:text-[40px] sm:text-[20px] mb-[5%] text-black">
          More Projects
        </h2>
        <PortfolioSlider projectData={projectsData} />
      </div>
    </div>
  );
}
