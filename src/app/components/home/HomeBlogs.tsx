import { convert_Date } from "@/app/components/Blogs/Blog_Item";
import { blogsProps } from "@/app/types/blog";
import Image from "next/image";
import Link from "next/link";


export default function HomeBlogs({data} : {data: blogsProps[]}){
    // console.log(data);
    return(
        <div className="mx-[auto] max-w-[90%] sm:flex flex-wrap sm:container md:max-w-[80%] lg:max-w-[82%]">
            {
                data.map((index)=>{
                    return(
                        <Link href={`../blog-details/${index.slug}`} key={index._id} className="w-[100%] mb-[30px] rounded-[24px] p-[25px] sm:w-[48%] lg:w-[32%] mr-[1%] shadow-[rgba(17,17,26,0.1)_0px_4px_16px,_rgba(17,17,26,0.05)_0px_8px_32px]">
                        <Image className="rounded-[8px] h-[240px] w-[100%] sm:object-cover"  src={index.imageUrl} alt="blog icon" width={100} height={100}/>
                        <div className="sm:flex my-[22px]">
                        <h3 className="text-[#0697D5] mb-[15px] text-[14px] px-[12px] py-[7px] bg-[#F2FBFF] rounded-[40px] sm:mb-[0] sm:mr-[30px]">{index.blogTypeId.type}</h3>
                        <h3 className="text-[#E0AD24] text-[14px] px-[12px] py-[7px] bg-[#FFFCF2] rounded-[40px] capitalize">{index.createdBy}</h3>
                        </div>
                            <h2 className="text-[18px] font-[700]" >{index.title}</h2>
                        <div className="border-t border-t-[#0000001A] pt-[15px] mt-[15px]">
                           <p className="text-[11px]">{convert_Date(index.createdAt)}</p> 
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
