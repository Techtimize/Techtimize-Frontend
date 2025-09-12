"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  fileName: string;
  arrayName: string;
};

export default function Design_Process({ fileName, arrayName }: Props) {
  const [data, setData] = useState<any[]>([]);

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
    <div className="flex custom-container justify-center lg:justify-between relative flex-wrap">
      <Image
        src="/assets/images/process-line.svg"
        alt="line"
        height={5}
        width={1000}
        className="absolute bottom-[6%] left-[10%] w-[80%] hidden lg:block"
      />

      {data.map((item, i) => (
        <div
          key={item.iconurl}
          className="w-[100%] sm:w-[30%] lg:w-[18%] text-center relative h-[unset] mb-[10px] sm:mb-[20px] lg:h-[400px] lg:mb-[0] x1200:h-[350px]"
        >
          <Image
            src={item.iconurl}
            alt="icon"
            width={35}
            height={35}
            className="inline h-[40px]"
          />

          {i !== 0 && (
            <Image
              className="absolute w-[90px] h-[60px] top-[-6%] left-[-30%] hidden lg:block"
              src={"/assets/images/process-arrow.svg"}
              alt="arrow"
              width={35}
              height={35}
            />
          )}

          <h3
            className="mt-[15px] sm:mt-[30px] mb-[10px] lg:mt-[50px] lg:mb-[20px] text-[18px]"
            style={{ color: item.color }}
          >
            {item.heading}
          </h3>

          <p className="text-[14px] text-[#535353] max-w-[90%] mx-[auto] mb-[35px]">
            {item.content}
          </p>

          <Image
            src={item.circleurl}
            width={50}
            height={50}
            alt="circle"
            className="inline absolute bottom-0 left-[40%] hidden lg:block"
          />
        </div>
      ))}
    </div>
  );
}
