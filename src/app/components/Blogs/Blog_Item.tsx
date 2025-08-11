import { blogsProps } from "@/app/types/blog";
import { Calendar } from "lucide-react";
import { User } from "lucide-react";
import Link from "next/link";


type blogsItemProp = {
    blogdata : blogsProps;
}


export function convert_Date(isodate: string) : string{
    const date = new Date(isodate);
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
}


export default function Blog_Item({blogdata}:blogsItemProp){
    // console.log(blogdata)
    
    return(
        <>
        <Link  href={`../blog-details/${blogdata._id}`} className="blog_item mb-[45px] w-[100%] md:w-[45%]  lg:w-[31%]">
        <div className="blog_item mb-[45px] w-[100%] md:w-[45%] mr-[2%] lg:w-[30%] mr-[3%]">
            <img className="md: w-full h-[250px] rounded-[8px] object-cover" loading="lazy" src={`${blogdata.imageUrl}`}/>
            <div className="blog_details md:flex mt-[18px] mb-[18px] justify-between w-[95%] mr-[auto]">
            <div className="blog_category md:text-[13px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] bg-[#0697D533] rounded-[8px] flex items-center">
            <p className="font-[600] ">{`${blogdata.blogTypeId.type}`}</p></div>
            <div className="date flex  p-[6px] items-center">
            <Calendar className="w-[16px] h-[22px] text-[#0697D5] "/>
            <div className="blog_date md:text-[12px] pl-[5px]">{`${convert_Date(blogdata.createdAt)}`}</div>
            </div>
            <div className="author flex pt-[4px] pb-[4px] pl-[12px] pr-[12px] items-center bg-[#AAAAAA33] rounded-[8px] capitalize">
            <User className="md: w-[16px] h-[22px] "/>
            <div className="blog_date md:text-[13x] pl-[5px]">{`${blogdata.createdBy}`}</div>
            </div></div>
            <h2 className="blog_title md:text-[18px] font-[600] pb-[10px] block">{`${blogdata.title}`}</h2>
            <div className="blog_desc line-clamp-2">{`${blogdata.description}`}</div>
        </Link>
            <Link href={`../blog-details/${blogdata._id}`} className="blog_title md:text-[18px] font-[600] pb-[10px] block">{`${blogdata.title}`}</Link>
            <div className="blog_desc line-clamp-2">{`${blogdata.description}`}</div>
        </div>
        </>
    )
}