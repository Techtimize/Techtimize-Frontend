"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sortBlogsByLatest } from "@/app/api/blogs/getblogsarray";
import { blogsProps } from "@/app/types/blog";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type BlogProps = {
  blog_slug: string;
};

export default function Blog_details_btn({ blog_slug }: BlogProps) {
  const [prevBlogId, setPrevBlogId] = useState<string | null>(null);
  const [nextBlogId, setNextBlogId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAndFind() {
      let blogsArray: blogsProps[] = [];
      blogsArray = await sortBlogsByLatest(blogsArray);

      const currentIndex = blogsArray.findIndex(blog => blog.slug === blog_slug);
      if (currentIndex !== -1) {
        const prev = blogsArray[currentIndex + 1]; // comes after in sorted array
        const next = blogsArray[currentIndex - 1]; // comes before in sorted array

        setPrevBlogId(prev?.slug || null);
        setNextBlogId(next?.slug || null);
      }
    }

    fetchAndFind();
  }, [blog_slug]);

  return (
    <div className="pr-[5%] sm : mt-[18%] flex justify-center">
      {prevBlogId && <Link className="bg-[#0B4D8E] rounded-[8px] text-[#fff] p-[20px] pt-[10px] pb-[10px] flex mr-[20px] items-center" href={`../${prevBlogId}`}><FaArrowLeft className="mr-[10px]"/>Previous Blog </Link>} 
      {nextBlogId && <Link className="bg-[#0B4D8E] rounded-[8px] text-[#fff] p-[20px] pt-[10px] pb-[10px] flex items-center" href={`../${nextBlogId}`}>Next Blog <FaArrowRight className="ml-[10px]"/></Link>}
    </div>
  );
}
