import type { Metadata } from "next";
import { getLatestBlogs } from "@/app/api/blogs/getlatestblogs";
import { getblogbyslug } from "@/app/api/blogs/getblogbyslug";
import { convert_Date } from "@/app/components/Blogs/Blog_Item";
import Other_Blogs from "@/app/components/Blogs/Other_Blogs";
import Blog_details_btn from "@/app/components/Blogs/blog_details_btn";
import { Calendar, User } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import { headers } from "next/headers";

type Props = {
  params: { blogslug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.techtimize.co";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const pathname = `/blog/${params.blogslug}`;
  const canonical = `${protocol}://${host}${pathname}`;

  return {
    title: `Blog | ${params.blogslug}`,
    alternates: {
      canonical,
    },
  };
}


const otherblogsdata = await getLatestBlogs();

export default async function BlogDetails({ params }: Props) {
  const { blogslug } = params;
  const blog_data = await getblogbyslug(blogslug);

  if (!blog_data) {
    return (
      <div className="text-red-600 text-lg">
        Blog not found or an error occurred.
      </div>
    );
  }

  return (
    <div className="max-w-[90%] md:max-w-[80%] ml-auto mr-auto mt-[50px] mb-[50px]">
      <div className="tabs text-[#727272] md:text-[19px] font-medium">
        <Link href="/">Home</Link>{" "}
        <MdKeyboardDoubleArrowRight className="inline" />
        <Link href="/blogs">Blogs</Link>{" "}
        <MdKeyboardDoubleArrowRight className="inline" />
        <span className=" text-[#069AD8]">{blog_data.title}</span>
      </div>

      <div className="title text-[30px] sm:text-[40px] md:font-semibold mt-[30px] mb-[30px]">
        {blog_data.title}
      </div>

      <div className="blog_details md:flex mt-[5px] mb-[18px] w-[95%] mr-auto">
        <div className="blog_category md:text-[16px] px-[12px] py-[4px] bg-[#0697D533] rounded-[8px] flex items-center">
          <p className="font-[600] ">{blog_data.blogTypeId.type}</p>
        </div>
        <div className="date flex p-[6px] items-center ml-[10px] mr-[10px]">
          <Calendar className="w-[16px] h-[22px] text-[#0697D5]" />
          <div className="blog_date md:text-[14px] pl-[5px]">
            {convert_Date(blog_data.createdAt)}
          </div>
        </div>
        <div className="author flex px-[12px] py-[4px] items-center bg-[#AAAAAA33] rounded-[8px] capitalize">
          <User className="w-[16px] h-[22px]" />
          <div className="blog_date md:text-[16px] pl-[5px]">
            {blog_data.createdBy}
          </div>
        </div>
      </div>

      <div className="md:mt-[30px] mb-[30px]">
        <img
          className="rounded-[8px] h-[300px] w-[95%] sm:h-[450px] w-[100%] object-cover"
          loading="lazy"
          src={blog_data.imageUrl}
          alt={blog_data.title}
        />
      </div>

      <div className="lg:flex justify-between">
        <div className="left-panel w-full lg:w-[60%]">
          <div className="description leading-[1.6]">
            <p>{blog_data.description}</p>
          </div>
          <Blog_details_btn blog_slug={blogslug} />
        </div>

        <div className="rightpanel mt-[40px] w-full pr-[5%] lg:w-[38%] lg:mt-0">
          <div className="follow-us bg-[#0697D5] p-[20px] text-[#fff] rounded-[12px]">
            <p className="text-[20px] font-[600]">Follow Us</p>
            <div className="social-icons flex mt-[20px] mb-[10px]">
              <Link
                href="https://www.linkedin.com/company/techtimize/"
                className="social-icons-child p-[10px] bg-[#fff] text-[#0697D5] rounded-[30px] mr-[10px]"
              >
                <FaLinkedinIn className="w-[30px] h-[30px]" />
              </Link>
              <Link
                href="https://www.instagram.com/techtimize.pk/"
                className="social-icons-child p-[10px] bg-[#fff] text-[#0697D5] rounded-[30px] mr-[10px]"
              >
                <FaInstagram className="w-[30px] h-[30px]" />
              </Link>
              <Link
                href="https://www.facebook.com/Techtimize"
                className="social-icons-child p-[10px] bg-[#fff] text-[#0697D5] rounded-[30px] mr-[10px]"
              >
                <FaTwitter className="w-[30px] h-[30px]" />
              </Link>
            </div>
          </div>

          <div className="rounded-[8px] border-[1px] mt-[30px]">
            {otherblogsdata.map((singleBlog) => (
              <Other_Blogs key={singleBlog._id} blog={singleBlog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
