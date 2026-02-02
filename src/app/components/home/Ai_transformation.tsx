import { second_section } from "@/app/constants/homepage_secondsection"
import Btn_redesign from "@/components/ui/btn_redesign"
import Image from "next/image";


export default function Transforming() {
  return (
      <div className="relative">
      <Image className="transforming-bg" src={"/assets/images/transforming-before.png"} alt="background" width={200} height={200}/>
      <Image className="ai-powered-before" src={"/assets/images/ai-powered-before.svg"} alt="background" width={200} height={200}/>
     <div className="max-w-[90%] rounded-[40px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] mx-[auto] mt-[40px] sm:mt-[80px] lg:pt-[10px] sm:pb-[35px] lg:pb-[50px] mb-[40px] sm:py-[0] pt-[1px] pb-[19px]">
     <div className="transforming !max-w-[98%] mx-[auto]  sm:container  sm:flex justify-between rounded-[50px] sm:px-[0] px-[15px]" >
         
      <div className="lg:w-[47%] sm:w-[50%] xl:ml-[30px] md:mt-[36px] sm:mt-[36px] mt-[20px] sm:mt-[0px] z-[9]">
        
        <h2 className="text-[#0B4D8E] text-[30px] sm:text-[42px] sm:max-w-[100%] lg:max-w-[80%] mt-[20px] mb-[20px] font-[700]"><span className="text-[#0697D5]"> AI-Powered   </span>Innovation That Drives Results <span className="text-[#0697D5]"></span></h2>
        <p className="text-[#727272] text-[18px] sm:max-w-[100%] lg:max-w-[88%]">At Techtimize, we believe AI is more than a trend — it’s a game-changer. By combining advanced algorithms with practical business insights, we design solutions that automate processes, unlock hidden opportunities, and deliver measurable growth.</p>
      <div className="mt-[30px]">
        {second_section.map((text,index)=>{
          return(
            <div key={index} className="flex my-[10px]"> 
              <Image src={"/assets/images/transform-tick.svg"} alt="tick" height={20} width={20}/>
              <p className="pl-[10px] text-[#727272] text-[18px] z-[9999]">{text}</p>
            </div>
          )
        })}
      </div>
      <div className="mt-[30px]">
      <Btn_redesign content="About Us" url="/about"/>
      </div >
      </div>
   
           
      <div className="sm:w-[47%] xl:ml-[0px] md:mt-[36px] sm:mt-[36px]">
      
      <Image loading="lazy" className="w-[100%] max-w-[92%] mx-[auto] h-[100%] mt-[28px] sm:my-[0] rounded-[16px] x1750:object-cover x1750:h-[550px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] object-cover" src={"https://techtimize-app-720869613f134d34bdacf758feb5bedc-production.s3.ap-south-1.amazonaws.com/images/robot-image.png?v=2"}  alt="About Us image" height={500}  width={500}/>
      </div>
      </div>
</div>
     </div>

  )
}