import PageHeader from "@/app/components/PageHeader/PageHeader";
import PortfolioSlider from "@/app/components/PortfolioSlider/PortfolioSlider";
import Image from "next/image";
import { getProjects } from "@/app/api/projects/get_project";
import projectsProps, { StackProps } from "@/app/types/project.type";

export default async function ProjectDetails({ params }: { params: { id: string } }) {
  const projectsData = await getProjects();
  const projectId = params.id;
  const project:projectsProps | undefined = projectsData.find((proj) => proj._id.includes(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <PageHeader heading="Project Detail" subHeading="Projects" />
      <div className="md:px-[10%] px-[5%] md:py-[5%] py-[10%]">
        <Image
          src={project.posterImage}
          alt={"project"}
          width={1026}
          height={675}
          className="w-full lg:mb-[3%] mb-[10%] rounded-[10px]"
        />
        <h4 className="lg:text-[31px] text-[25px] text-black">{project.name}</h4>
        <hr className="lg:mt-[5%] lg:mb-[3.5%] sm:mt-[8%] sm:mb-[5%] mt-[15%] mb-[10%] h-[2px] bg-[#D9D9D9]" />
        <h5 className="lg:text-[25px] sm:text-[20px] md:mb-[2%] mb-[5%] text-black">About Project</h5>
        <p className="lg:mb-[3.5%] md:mb-[5%] mb-[10%] lg:text-[16px] text-[14px] text-projectDetails">
          {project.about}
        </p>
        <h5 className="lg:text-[25px] md:mb-[3%] mb-[5%] sm:text-[20px] text-black">Technologies</h5>
        {/* <div className="flex items-center gap-[15px]">
          {project.stackId.map((tech: StackProps) => (
              <div key={tech._id}> 
              <Image
                src={tech.serviceImage}
                alt={tech.name}
                width={50}
                height={50}
                className="lg:w-[56.78px] lg:h-[47.87px] w-[41px] h-[38px]"
              />
            </div>
          ))}
        </div> */}

      </div>
      <div className="bg-[#FBFCFF] pl-[5%] py-[5%]">
        <h2 className="lg:text-[40px] sm:text-[20px] mb-[5%] text-black">More Projects</h2>
        <PortfolioSlider projectData={projectsData} />
      </div>
    </div>
  );
};

