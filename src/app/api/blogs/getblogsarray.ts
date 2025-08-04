import { blogsProps } from "@/app/types/blog";
import { getBlogs } from "./getblogs";


export async function sortBlogsByLatest(blogs: blogsProps[]): Promise<blogsProps[]> {  
  blogs = await getBlogs();
  const blogs_data = await blogs.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  // console.log("get blogs array : " , blogs_data);
  return blogs_data;
}
