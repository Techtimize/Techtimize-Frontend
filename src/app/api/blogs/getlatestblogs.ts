import { blogsProps } from "@/app/types/blog";
import { getBlogs } from "./getblogs";

export async function getLatestBlogs(): Promise<blogsProps[]> {
  const blogs = await getBlogs();

  const latestBlogs = blogs
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4);

  return latestBlogs;
}


export async function get3LatestBlogs(): Promise<blogsProps[]> {
  const blogs = await getBlogs();

  const latestBlogs = blogs
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return latestBlogs;
}
