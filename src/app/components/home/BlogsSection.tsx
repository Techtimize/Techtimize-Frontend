"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading_proto from "@/components/heading_prototype";
import HomeBlogs from "./HomeBlogs";
import Btn_redesign from "@/components/ui/btn_redesign";

interface BlogsSectionProps {
  data: any[];
}

const BlogsSection: React.FC<BlogsSectionProps> = ({ data }) => {
  return (
    <div>
      {/* Heading with top to bottom animation */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8
        }}
      >
        <Heading_proto 
          heading="Read our Blogs" 
          para="Stay updated with the latest insights, tips, and trends." 
        />
      </motion.div>

      {/* Blogs with right to left animation */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8,
          delay: 0.2
        }}
      >
        <HomeBlogs data={data} />
      </motion.div>

      {/* View All button with right to left animation */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8,
          delay: 0.4
        }}
        className="text-center mt-[30px] mb-[50px] sm:mb-[100px]"
      >
        <Btn_redesign content={"View All"} url={"/blogs"} />
      </motion.div>
    </div>
  );
};

export default BlogsSection;