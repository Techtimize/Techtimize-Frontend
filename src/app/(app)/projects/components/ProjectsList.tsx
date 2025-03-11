"use client";
import { projectTags, projectsData } from "@/app/constants/portfolioData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProjectsList = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag === selectedTag);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-[5%] min-h-screen">
      <div className="flex w-full justify-between items-center sm:gap-[20px]">
        <div>
          <p className="page-blue-heading xl:mb-[11px] pt-[20px] md:pt-[40px] xl:pt-0 mb-[5px]">
            Our Portfolio
          </p>
          <h4 className="page-sub-heading font-semibold xl:mb-[54px] mb-[25px]">
            Here’s a Look at Our Work
          </h4>
        </div>
        <div className="sm:flex items-center xl:gap-[15px] sm:gap-[5px] hidden">
          <div
            className={`flex flex-col xl:px-[20px] sm:px-[10px] py-[5px] rounded-[10px] items-center justify-center ${
              selectedTag === "All" ? "shadow-xl" : "shadow-none"
            }`}
            onClick={() => setSelectedTag("All")}
          >
            <p
              className={`cursor-pointer xl:text-[16px] text-[14px] ${
                selectedTag === "All"
                  ? "satoshi-variable-bold text-primary"
                  : "satoshi-medium"
              }`}
            >
              All
            </p>
            <div
              className={`h-[3px] w-full mt-[5px] rounded-full ${
                selectedTag === "All" ? "bg-primary" : "bg-transparent"
              }`}
            />
          </div>
          <div className="flex items-center xl:gap-[15px] sm:gap-[5px]">
            {projectTags.map((tag: {name:string}) => {
              return (
                <div
                  key={tag.name}
                  className={`flex flex-col xl:px-[20px] sm:px-[10px] py-[5px] rounded-[10px] items-center justify-center ${
                    selectedTag === tag.name ? "shadow-xl" : "shadow-none"
                  }`}
                  onClick={() => setSelectedTag(tag.name)}
                >
                  <p
                    className={`cursor-pointer xl:text-[16px] text-[14px] ${
                      selectedTag === tag.name
                        ? "satoshi-variable-bold text-primary"
                        : "satoshi-medium"
                    }`}
                  >
                    {tag.name}
                  </p>
                  <div
                    className={`h-[3px] w-full mt-[5px] rounded-full ${
                      selectedTag === tag.name ? "bg-primary" : "bg-transparent"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <motion.div
        className="flex flex-col gap-[30px] bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
            >
              <Link href={`/projects/${project.id}`} className="drop-shadow-xl">
                <div
                  className="flex rounded-[10px]"
                  style={{ backgroundColor: project.bg }}
                >
                  <div className="basis-[70%] flex flex-col justify-center p-[3%]">
                    <p className="mb-[25px]">{project.title}</p>
                    <p className="xl:text-[16px] text-[12px] text-tertiary mb-[40px]">
                      {project?.description}
                    </p>
                    <div className="flex sm:flex-row flex-col sm:items-center items-start xl:gap-[40px] gap-[20px]">
                      <div className="flex items-center flex-wrap xl:gap-[20px] gap-[10px]">
                        {project?.technologies?.map((item) => (
                          <Image
                            key={item.id}
                            src={item?.image}
                            alt={"image"}
                            width={46}
                            height={46}
                            className="w-[26px] h-[26px] xl:w-[46px] xl:h-[46px]"
                          />
                        ))}
                      </div>
                      <Button variant="outline" className=" bg-blue-1 text-white">View Project</Button>
                    </div>
                  </div>
                  <div className="sm:basis-[30%] basis-[40%]">
                    <Image
                      src={project?.imageDesktop}
                      alt={"project image"}
                      width={552}
                      height={358}
                      className="h-[358px] hidden xl:flex"
                    />
                    <Image
                      src={project?.imageTablet}
                      alt={"project image"}
                      width={552}
                      height={358}
                      className="hidden sm:flex xl:hidden w-full h-full"
                    />
                    <Image
                      src={project?.imageMobile}
                      alt={"project image"}
                      width={552}
                      height={358}
                      className="flex sm:hidden w-full h-full"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsList;
