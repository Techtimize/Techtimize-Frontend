"use client";
import Blog_Item from "@/app/components/Blogs/Blog_Item";
import { blogsProps } from "@/app/types/blog";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type BlogParentProps = {
  blog_category: string;
  blogs: blogsProps[];
  expandedCategory: string | null;
  setExpandedCategory: (value: string | null) => void;
};

const BlogParent = React.memo(function BlogParent({
  blog_category,
  blogs,
  expandedCategory,
  setExpandedCategory,
}: BlogParentProps) {
  function expandCall(category: string) {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  }

  const isExpanded = expandedCategory === blog_category;

  return (
    <div className="blogParent  md:flex-row px-[5%] pt-[50px]" id={blog_category}>

    <div className="blogParent p-[10%]  lg:p-[8%] md:flex-row pl-[5%] pr-[5%] " id={blog_category}>
      <div className="blog_top md:flex justify-between mb-[5%]  border-b pb-[20px]">
        <h2 className="md:text-[25px] font-[500]">{blog_category}</h2>
        <button
          className="md:text-[18px] text-[#0B4D8E] border-b border-[#0B4D8E]"
          onClick={() => expandCall(blog_category)}
        >
          {isExpanded ? "View Less" : "View All"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={isExpanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="blog_container md:flex flex-wrap  justify-between">


          <div className="blog_container md:flex flex-wrap">
            {(isExpanded ? blogs : blogs.slice(0, 3)).map((blog) => (
              <Blog_Item key={blog._id} blogdata={blog} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default BlogParent
