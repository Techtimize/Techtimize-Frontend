"use client";

import { useState } from "react";
import Link from "next/link";
import BlogParent from "./BlogParent";
import { blogsProps } from "@/app/types/blog";

type BlogCategoryType = {
  _id: string;
  type: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type BlogContainerProps = {
  blog_category: BlogCategoryType[];
  blogs: blogsProps[];
};

export default function BlogContainer({ blog_category, blogs }: BlogContainerProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col BlogType_Tabs md:flex-row p-[5%] pb-[0]">
        {blog_category.map((category) => (
          <Link
            key={category._id}
            href={`#${category.type}`}
            className="text-center p-[10px] mb-[10px] md:pt-[10px] md:pb-[10px] md:pl-[2%] md:pr-[2%] mr-[1%] border rounded-[5px] border-[#0697D5] cursor-pointer hover:bg-[#0697D5] hover:text-[#fff] duration-[0.2s]"
          >
            {category.type}
          </Link>
        ))}
      </div>

      {blog_category.map((category) => (
        <BlogParent
          key={category._id}
          blog_category={category.type}
          blogs={blogs.filter((blog: blogsProps) => blog.blogTypeId._id === category._id)}
          expandedCategory={expandedCategory}
          setExpandedCategory={setExpandedCategory}
        />
      ))}
    </>
  );
}
