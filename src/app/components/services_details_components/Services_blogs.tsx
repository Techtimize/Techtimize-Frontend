import { get3LatestBlogs } from "@/app/api/blogs/getlatestblogs";
import Blog_Item from "@/app/components/Blogs/Blog_Item";
import { blogsProps } from "@/app/types/blog";
import Link from "next/link";

type blogsItemProp = {
    blogdata : blogsProps;
}

const blogs = await get3LatestBlogs();

export default function Services_blogs(){
    return(
        <>
        <div className="flex justify-between flex-wrap">
            {
            blogs.map((index)=>{
                return(
                  <Blog_Item key={index._id} blogdata={index} />
                )
            })
        }
        </div>
        <div className="text-center  mt-[30px]">
        <Link href={"/blogs"} className="bg-[#0B4D8E] text-white px-[28px] py-[12px] rounded-[10px] text-[20px]">View More </Link>
        </div>
        </>
    )
}