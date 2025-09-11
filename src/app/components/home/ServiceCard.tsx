import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type props ={
     title  : string;
     description : string,
     image : string,
     url : string;
}

export default function ServiceCard({title,description, image, url}:props) {
  // console.log(image);
  // console.log(url);
    return(
        <Link href={`/${url}`} className="flex sm:p-[30px] py-[30px] px-[15px] xl:justify-around justify-between">
          <div className=":w-[30%]"><Image src={image} alt="servcie" width={60} height={60}/></div>
          <div className="w-[70%] sm:w-[65%]">
            <h3 className="font-[700] text-[18px] mb-[10px] block">{title}</h3>
            <p className="line-clamp-3 text-[#727272]">{description}</p>
    </div>
    </Link>
    )
} 