import { design_process } from "@/app/constants/ui_ux_details";
import Image from "next/image";

export default function Design_Process() {
    return (
        <div className="flex custom-container justify-center lg:justify-between relative flex-wrap">
            <Image src="/assets/images/process-line.svg" alt="line" height={5} width={1000} className="absolute bottom-[6%] left-[10%] w-[80%] hidden lg:block"/>
            {
                design_process.map((item, i) => {
                    return (
                        <div key={item.iconurl} className="w-[100%] sm:w-[30%] lg:w-[18%] text-center relative h-[unset] mb-[10px] sm:mb-[20px] lg:h-[400px] lg:mb-[0]  x1200:h-[350px]">
                            <Image src={item.iconurl} alt="icon" width={35} height={35} className="inline h-[40px]" />

                            {i !== 0 && (
                                <Image
                                className="absolute w-[90px] h-[60px] top-[-6%] left-[-30%] hidden lg:block"
                                    src={"/assets/images/process-arrow.svg"}
                                    alt="icon"
                                    width={35}
                                    height={35}
                                />
                            )}

                            <h2 className="mt-[15px] sm:mt-[30px] mb-[10px] lg:mt-[50px] lg:mb-[20px] text-[18px] " style={{ color: item.color }}>
                                {item.heading}
                            </h2>
                            <p className="text-[14px] text-[#535353] max-w-[90%] mx-[auto] mb-[35px]">{item.content}</p>
                            <Image src={item.circleurl} width={50} height={50} alt="circle" className="inline absolute bottom-0 left-[40%] hidden lg:block"/>
                        </div>
                    );
                })

            }
        </div>
    )
}