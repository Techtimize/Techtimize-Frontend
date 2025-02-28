"use client";
import React from "react";
import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { stats } from "@/app/constants/stats";
import CountUp from "react-countup";

const statVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const Stats = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 xl:gap-[60px] gap-[15px] xl:px-[98px] sm:px-[25px] md:px-[30px] lg:px-[40px] px-[16px]">
      {stats.map((item,) => (
        <motion.div
          key={item.id}
          initial="hidden"
          animate="visible"
          variants={statVariants}
          transition={{ duration: 0.5 }}
        >

          <StatCard

            title={item.title}
            stat={item.stats}
            suffix={item.suffix}
            
            
          />
        </motion.div>
      ))}
    </div>
  );
}
export default Stats;
