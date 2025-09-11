"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  fileName: string; 
  arrayName: string; 
}

export default function Six_box_dynamic({ fileName, arrayName }: Props) {
  const [data, setData] = useState<any[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const module = await import(`@/app/constants/${fileName}`);
        if (module[arrayName]) {
          setData(module[arrayName]);
        } else {
          console.error(`Array "${arrayName}" not found in ${fileName}`);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
    loadData();
  }, [fileName, arrayName]);

  return (
      <div className="flex flex-wrap justify-between">
      {data.map((item, index) => (
        <div
          key={item.iconurl}
          className="sm:w-[48%] lg:w-[31%] mb-[30px] border border-[#E0E0E0] text-center p-[30px] rounded-[10px] hover:bg-[#0B4D8E] hover:text-white transition-all duration-300 ease-in-out"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            src={hoveredIndex === index ? item.hovericonurl : item.iconurl}
            alt="icon"
            height={40}
            width={40}
            className="inline transition-all duration-300 ease-in-out"
          />
          <h3 className="pt-[30px] pb-[12px] font-[800]">{item.name}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
