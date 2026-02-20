import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type props ={
     title  : string;
     description : string,
     image : string,
     hoverImage?: string,
     url : string;
}

export default function ServiceCard({title, description, image, hoverImage, url}: props) {
    const resolvedHoverImage = hoverImage || image;
    return(
        <Link href={`/${url}`} className="flex sm:p-[30px] py-[30px] px-[15px] xl:justify-around justify-between">
          <div className="w-[30%] flex items-start">
              <div className="relative w-[45px] h-[45px]">
                <Image
                  src={image}
                  alt="service"
                  width={45}
                  height={45}
                  className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <Image
                  src={resolvedHoverImage}
                  alt="service hover"
                  width={45}
                  height={45}
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
          </div>
          <div className="w-[70%] sm:w-[65%]">
            <h3 className="font-[700] text-[18px] mb-[10px] block transition-colors duration-300 group-hover:text-white">{title}</h3>
            <p className="line-clamp-3 text-[#727272] transition-colors duration-300 group-hover:text-white">{description}</p>
          </div>
        </Link>
    )
} 