"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Btn_redesign from "@/components/ui/btn_redesign";

type Service = {
  _id: string;
  url: string;
  serviceName: string;
  description: string;
  iconUrl: string;
  iconHoverUrl?: string;
};

export default function ServicesSection({ services }: { services: Service[] }) {
  console.log("Services",services);
  
  return (
    <div>
      {/* Heading: slide top → bottom */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-[40px] max-w-[90%] mx-[auto] sm:mx-[unset] sm:max-w-[unset] lg:mt-[60px] mb-[30px] text-center"
      >
        <h2 className="text-center text-[27px] sm:text-[32px] mb-[20px] font-[700]">
          Our Services
        </h2>
        <p className="text-center text-[#727272] text-[18px]">
          Discover services designed to help your business grow and succeed.
        </p>
      </motion.div>

      {/* Cards: pop up with spring stagger */}
      <div className="max-w-[90%] mx-[auto] flex flex-wrap lg:max-w-[82%] justify-between sm:max-w-[80%]">
        
        {services.map((key, index) => (
          <motion.div
            key={key._id}
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 14,
            }}
            className="sm:w-[48%] sm:mt-[30px] lg:w-[31.2%] shadow-[rgba(0,0,0,0.1)_0px_10px_50px] mb-[15px] rounded-[20px] lg:mt-[20px] z-[9] group transition-colors duration-300 hover:bg-[#0697D5] cursor-pointer"
          >
            <ServiceCard
              url={key.url}
              title={key.serviceName}
              description={key.description}
              image={key.iconUrl}
              hoverImage={key.iconHoverUrl}
            />
          </motion.div>
        ))}
      </div>

      {/* Button: same pop-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 130, damping: 14 }}
        className="mt-[20px] sm:mt-[30px] text-center"
      >
        <Btn_redesign content="View All Services" url="/services" />
      </motion.div>
    </div>
  );
}
