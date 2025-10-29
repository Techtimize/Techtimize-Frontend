import PageHeader from "@/app/components/PageHeader/PageHeader";
import { getBlogs } from "@/app/api/blogs/getblogs";
import { GetBlogCategories } from "@/app/api/blogs/getblogcategories";
import { blogsProps } from "@/app/types/blog";
import BlogContainer from "@/app/components/Blogs/blog_container";

import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";
export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/blogs");

  const baseMetadata = await generateMetadataFromBE("blogs");

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
  };
}

export default async function Blogs() {
  const blogCategory = await GetBlogCategories();
  const blogs: blogsProps[] = await getBlogs();

  return (
    <div className="p-[20px] md:p-[40px] !pb-[0]" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <PageHeader subHeading="Blogs" heading="Blogs" />
      <div style={{ width: "100%", maxWidth: "1500px" }}>
        <BlogContainer blog_category={blogCategory} blogs={blogs} />
      </div>
    </div>
  );
}
