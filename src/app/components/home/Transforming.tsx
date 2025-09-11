"use client"
import { second_section } from "@/app/constants/homepage_secondsection"
import Btn_redesign from "@/components/ui/btn_redesign"
import { motion } from "framer-motion";
import Image from "next/image";


export default function Transforming() {
  return (
      <div className="relative">
      <Image className="transforming-bg" src={"/assets/images/transforming-before.png"} alt="background" width={200} height={200}/>
     <div className="transforming !max-w-[90%] mx-[auto] sm:mt-[70px] sm:container sm:mt-[120px] sm:flex justify-between">
      
      <div className="sm:w-[47%]">
        <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="xl:ml-[64px] md:mt-[36px] sm:mt-[36px]"
      >
      <Image className="w-[100%] h-[100%]" src={"/assets/images/about-us.svg"}  alt="ABout Us image" height={100}  width={100}/>
        </motion.div>
      </div>
    

       
      <div className="sm:w-[47%]">
        <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="xl:ml-[64px] md:mt-[36px] sm:mt-[36px]"
      >
        <Image src={"/assets/images/second-section.png"} alt="about us" width={40} height={40}/>
        <h2 className="text-[#0B4D8E] text-[30px] sm:text-[42px] sm:max-w-[80%] mt-[20px] mb-[20px] font-[700]"><span className="text-[#0697D5]"> AI-Powered   </span>Innovation That Drives Results <span className="text-[#0697D5]"></span></h2>
        <p className="text-[#727272] text-[18px] sm:max-w-[88%] ">At Techtimize, we believe AI is more than a trend — it’s a game-changer. By combining advanced algorithms with practical business insights, we design solutions that automate processes, unlock hidden opportunities, and deliver measurable growth.</p>
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
       </motion.div>
      </div>
   

      </div>

     </div>

  )
}