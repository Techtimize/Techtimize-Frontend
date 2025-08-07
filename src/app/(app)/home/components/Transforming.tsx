"use client"
import { second_section } from "@/app/constants/homepage_secondsection"
import Btn_redesign from "@/components/ui/btn_redesign"
import { motion } from "framer-motion";
import Image from "next/image";


export default function Transforming(){
    return(
     <div className="container sm:mt-[120px] flex justify-between">
      
      <div className="w-[47%]">
        <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="xl:ml-[64px] md:mt-[36px] sm:mt-[36px]"
      >
      <Image className="w-[100%] h-[100%]" src={"/assets/images/about-us.svg"}  alt="ABout Us image" height={100}  width={100}/>
        </motion.div>
      </div>
    

       
      <div className="w-[47%]">
        <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="xl:ml-[64px] md:mt-[36px] sm:mt-[36px]"
      >
        <Image src={"/assets/images/second-section.png"} alt="about us" width={40} height={40}/>
        <h2 className="text-[#0B4D8E] text-[42px] max-w-[80%] mt-[20px] mb-[20px]">Transforming Concepts into <span className="text-[#0697D5]"> Code </span>, from Vision to <span className="text-[#0697D5]">Life</span></h2>
        <p className="text-[#727272] text-[18px] max-w-[80%] ">At Techtimize, we don’t just build software, we craft smart, scalable solutions that spark growth and innovation. From scrappy startups to growing enterprises, we help businesses adapt, evolve, and thrive in the fast-moving digital world.</p>
      <div className="mt-[30px]">
        {second_section.map((text,index)=>{
          return(
            <div key={index} className="flex my-[10px]"> 
              <Image src={"/assets/images/transform-tick.svg"} alt="tick" height={20} width={20}/>
              <p className="pl-[10px] text-[#727272] text-[18px]">{text}</p>
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

    )
}