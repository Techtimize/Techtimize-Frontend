import { getblogbyid } from "@/app/api/blogs/getblogbyid";
import { getLatestBlogs } from "@/app/api/blogs/getlatestblogs";
import { convert_Date } from "@/app/components/Blogs/Blog_Item";
import Other_Blogs from "@/app/components/Blogs/Other_Blogs";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import Blog_details_btn from "@/app/components/Blogs/blog_details_btn";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

type BlogDetailsProps = {
  params: { blogid: string };
};

const otherblogsdata = await getLatestBlogs();

export default async function BlogDetails({ params }: BlogDetailsProps) {
  // console.log("params received in BlogDetails:", params);
  const { blogid } = await params;
  const blog_data = await getblogbyid(blogid);
  if (!blog_data) {
    return (
      <div className="text-red-600 text-lg">Blog not found or an error occurred.</div>
    );
  }
  // console.log("Fetched blog data in page:", blog_data);
  return (
    <div className="max-w-[90%] md:max-w-[80%] ml-auto mr-auto mt-[50px] mb-[50px]">
      <div className="tabs text-[#727272] md:text-[19px] font-medium">
        <Link href="/" >Home</Link> <span>{" >> "}</span>
        <Link href="/blogs">Blogs</Link> <span>{" >> "}</span>
        <span className=" text-[#069AD8]">{blog_data.title}</span>
      </div>
      <div className="title text-[30px] sm:text-[40px] md:font-semibold mt-[30px]  mb-[30px] ">{blog_data.title}</div>
      <div className="blog_details md:flex mt-[5px] mb-[18px]  w-[95%] mr-[auto]">
        <div className="blog_category md:text-[16px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] bg-[#0697D533] rounded-[8px] flex items-center">
          <p className="font-[600] ">{blog_data.blogTypeId.type}</p></div>
        <div className="date flex  p-[6px] items-center ml-[10px] mr-[10px] " >
          <Calendar className="w-[16px] h-[22px] text-[#0697D5] " />
          <div className="blog_date md:text-[14px] pl-[5px] ">{`${convert_Date(blog_data.createdAt)}`}</div>
        </div>
        <div className="author flex pt-[4px] pb-[4px] pl-[12px] pr-[12px] items-center bg-[#AAAAAA33] rounded-[8px] capitalize">
          <User className="md: w-[16px] h-[22px] " />
          <div className="blog_date md:text-[16x] pl-[5px]">{blog_data.createdBy}</div>
        </div>
      </div>
      <div className="md: mt-[30px] mb-[30px] "><img className="rounded-[8px] h-[300px] w-[95%] object-cover sm:h-[450px] w-[100%]" loading="lazy" src={blog_data.imageUrl} alt="" /></div>
      <div className=" lg:flex justify-between">
        <div className="left-panel w-[100%]   lg:w-[60%]  x1100:w-[62%]   x1300:w-[68%]">
        <div className="description leading-[1.6]"><p>{blog_data.description}</p></div>
                <Blog_details_btn  blog_id = {blogid}/>
          </div>
        <div className="rightpanel mt-[40px]  w-[100%] pr-[5%]  lg:w-[38%] lg:mt-[0] x1100:w-[35%]     x1300:w-[30%] ">
          <div className="follow-us bg-[#0697D5] p-[20px] text-[#fff] rounded-[12px] ">
            <div>  <p className="text-[20px] font-[600]">Follow Us</p> </div>
            <div className="social-icons flex mt-[20px] mb-[10px]">
              <div className="social-icons-child p-[10px] bg-[#fff] text-[#0697D5] rounded-[30px] mr-[10px]"><Link  href="https://www.linkedin.com/company/techtimize/"><FaLinkedinIn className="w-[30px] h-[30px]" /></Link></div>
              <div className="social-icons-child p-[10px] bg-[#fff] text-[#0697D5] rounded-[30px] mr-[10px]"><Link  href="https://www.instagram.com/techtimize.pk/"><FaInstagram className="w-[30px] h-[30px]" /></Link></div>
              <div className="social-icons-child p-[10px] bg-[#fff] text-[#0697D5] rounded-[30px] mr-[10px]"><Link  href="https://www.facebook.com/Techtimize"><FaTwitter className="w-[30px] h-[30px]" /></Link></div>
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
