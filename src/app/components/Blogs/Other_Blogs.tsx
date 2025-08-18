import { blogsProps } from "@/app/types/blog";
import Link from "next/link";

type OtherBlogProps = {
  blog: blogsProps;
};

export default function Other_Blogs({ blog }: OtherBlogProps) {
  return (
    <div className="flex justify-between p-[10px]">
        <div className="w-[40%]">
            <img className="h-[80px] object-cover rounded-[8px] w-[100%]" src={blog.imageUrl} alt="" loading="lazy"/>
        </div>
        <div className="w-[55%]">
            <Link href={blog._id}><p className="text-[14px] line-clamp-2 ">{blog.title}</p></Link>
            <div className="mt-[7px]"><p className=" inline text-[10px] bg-[#0697D533] p-[14px] pb-[7px] pt-[7px] rounded-[8px]">{blog.blogTypeId.type}</p></div>
        </div>
    </div>
  );
}
