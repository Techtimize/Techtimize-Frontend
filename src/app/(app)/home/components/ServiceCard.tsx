import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type props ={
     title  : string;
     description : string,
     image : string
}

export default function ServiceCard({title,description, image}:props) {
  // console.log(image);
  
    return(
        <div className="flex p-[30px]">
          <div className="w-[30%]"><Image src={image} alt="servcie" width={60} height={60}/></div>
          <div className="w-[65%]">
            <Link href="#" className="font-[700] text-[18px] mb-[10px] block">{title}</Link>
            <p className="line-clamp-3 text-[#727272]">{description}</p>
          </div>
    </div>
    )
} 