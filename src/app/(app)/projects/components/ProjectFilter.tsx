"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import projectsProps from "@/app/types/project.type";

export default function ProjectsFilter({ projects }: { projects: projectsProps[] }) {
    const [selectedTag, setSelectedTag] = useState("All");
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000); 
    }, []);

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
                    <h2 className="page-sub-heading font-semibold xl:mb-[54px] mb-[25px]">
                        Here’s a Look at Our Work
                    </h2>
                </div>
            </div>

            {loading ? (
                <div className="flex flex-col gap-[30px]">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="animate-pulse flex rounded-[10px] bg-gray-200 h-[150px] w-full"></div>
                    ))}
                </div>
            ) : (
                <motion.div
                    className="flex flex-col gap-[30px]"
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
                                <Link href={`/projects/${project.slug}`} className="no-underline">
                                    <div
                                        className="flex rounded-[10px] cursor-pointer"
                                        style={{ backgroundColor: project.backgroundColor || "#f3f4f6" }}
                                    >
                                        <div className="basis-[70%] p-[3%]">
                                            <p className="mb-[25px]">{project.name}</p>
                                            <p className="text-tertiary mb-[40px]">{project.description}</p>
                                            <Button className="bg-blue-1 hover:bg-white hover:text-black text-white">
                                                View Project
                                            </Button>
                                        </div>
                                        
                                      
                                        <div className="basis-[30%] flex items-center justify-center">
                                            <Image
                                                src={project.previewImage}
                                                alt="Project image"
                                                width={250}
                                                height={180}
                                                className="w-[250px] h-[180px] object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </div>
    );
}
