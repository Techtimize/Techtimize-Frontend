"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projectTags } from "@/app/constants/portfolioData";
import projectsProps from "@/app/types/project.type";
export default function ProjectsFilter({ projects }: { projects: projectsProps[] }) {
    const [selectedTag, setSelectedTag] = useState("All");
    const filteredProjects =
        selectedTag === "All"
            ? projects
            : projects.filter((project) =>
                project.tags.some((tag) => tag === selectedTag)
            );
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
                        className={`flex flex-col xl:px-[20px] sm:px-[10px] py-[5px] rounded-[10px] items-center justify-center ${selectedTag === "All" ? "shadow-xl" : "shadow-none"
                            }`}
                        onClick={() => setSelectedTag("All")}
                    >
                        <p
                            className={`cursor-pointer xl:text-[16px] text-[14px] ${selectedTag === "All"
                                ? "satoshi-variable-bold text-primary"
                                : "satoshi-medium"
                                }`}
                        >
                            All
                        </p>
                        <div
                            className={`h-[3px] w-full mt-[5px] rounded-full ${selectedTag === "All" ? "bg-primary" : "bg-transparent"
                                }`}
                        />
                    </div>
                    <div className="flex items-center xl:gap-[15px] sm:gap-[5px]">
                        {projectTags.map((tag, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col xl:px-[20px] sm:px-[10px] py-[5px] rounded-[10px] items-center justify-center ${selectedTag === tag.name ? "shadow-xl" : "shadow-none"
                                        }`}
                                    onClick={() => setSelectedTag(tag.name)}
                                >
                                    <p
                                        className={`cursor-pointer xl:text-[16px] text-[14px] ${selectedTag === tag.name
                                            ? "satoshi-variable-bold text-primary"
                                            : "satoshi-medium"
                                            }`}
                                    >
                                        {tag.name}
                                    </p>
                                    <div
                                        className={`h-[3px] w-full mt-[5px] rounded-full ${selectedTag === tag.name ? "bg-primary" : "bg-transparent"
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
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project._id}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.5 }}
                        >
                            <Link href={`/projects/${project._id}`} className="no-underline">
                                <div className="flex rounded-[10px] bg-gray-100 cursor-pointer">
                                    <div className="basis-[70%] p-[3%]">
                                        <p className="mb-[25px]">{project.name}</p>
                                        <p className="text-tertiary mb-[40px]">{project.description}</p>
                                        {/* <div className="flex items-center gap-[15px]">
                                            {project.stackId.map((tech: StackProps) => (
                                                <Image
                                                    key={tech._id}
                                                    
                                                    src={tech.serviceImage} 
                                                    alt={tech.name}
                                                    width={50}
                                                    height={50}
                                                    className="lg:w-[56.78px] lg:h-[47.87px] w-[41px] h-[38px]"
                                                />
                                            ))}
                                        </div> */}
                                        <Button variant="outline" className="bg-blue-1 text-white">
                                            View Project
                                        </Button>
                                    </div>
                                    <div className="basis-[30%]">
                                        <Image src={project.previewImage} alt="Project image" width={552} height={358} unoptimized />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
