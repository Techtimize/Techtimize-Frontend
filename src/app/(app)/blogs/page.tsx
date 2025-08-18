import PageHeader from "@/app/components/PageHeader/PageHeader";
import { getBlogs } from "@/app/api/blogs/getblogs";
import { GetBlogCategories } from "@/app/api/blogs/getblogcategories";
import { blogsProps } from "@/app/types/blog";
import BlogContainer from "@/app/components/Blogs/blog_container";

export default async function Blogs() {
  const blogCategory = await GetBlogCategories();
  const blogs: blogsProps[] = await getBlogs();

  return (
    <div className="p-[20px] md:p-[40px]" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <PageHeader subHeading="Blogs" heading="Blogs" />
      <div style={{ width: "100%", maxWidth: "1500px" }}>
        <BlogContainer blog_category={blogCategory} blogs={blogs} />
      </div>
    </div>
  );
}
