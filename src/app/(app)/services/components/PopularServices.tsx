"use client";
import { serviceCardInfo, serviceOptions } from "@/app/constants/services";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const serviceCardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const PopularServices = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    const defaultService = serviceCardInfo.find(
      (service) => service.serviceName === "App Development"
    );
    setSelectedService(defaultService);
    setAnimationKey((prev) => prev + 1);
  }, []);

  const handleServiceSelect = (serviceText: string) => {
    const selectedServiceInfo = serviceCardInfo.find(
      (service) => service.serviceName === serviceText
    );
    setSelectedService(selectedServiceInfo);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="w-full">
      <ul className="flex flex-nowrap items-center sm:justify-center lg:justify-between gap-3 sm:gap-6 overflow-hidden overflow-x-auto w-full scrollbar-hide px-[20px] text">
        {serviceOptions?.map((service) => (
          <li
            key={service?._id}
            className="relative whitespace-nowrap sm:w-auto cursor-pointer satoshi-medium transition-colors duration-300"
            onClick={() => handleServiceSelect(service.text)}
          >
            <span
              className={`${
                selectedService?.serviceName === service.text
                  ? "text-[#26A4DA] font-bold"
                  : "text-black"
              }`}
            >
              {service?.text}
            </span>
            {selectedService?.serviceName === service.text && (
              <div className="absolute left-0 right-0 bottom-[-4px] w-[40%] h-[3px] bg-[#26A4DA] mx-auto transition-all duration-300" />
            )}
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-center my-[30px]">
        <div className="h-[3px] rounded-full sm:w-[80%] w-[95%] bg-white drop-shadow-lg" />
      </div>
      <p className="text mb-[30px] text-black">
        We're your dedicated partner in web and mobile app development,
        specializing in creating bespoke solutions that bring your unique vision
        to life. With a focus on user-centric design, scalability, and robust
        functionality, we're here to empower your online presence and drive your
        success.
      </p>
      <h5 className="mb-[20px] text-[22px] text-black">What we Offer</h5>
      <motion.div
        key={animationKey} 
        initial="hidden"
        animate="visible"
        variants={serviceCardVariants}
        transition={{ duration: 0.5 }}
        className="flex flex-nowrap gap-[50px] overflow-x-auto scrollbar-hide max-w-full"
      >
        {selectedService?.services?.map((service: Service) => (
          <div
            key={service.id}
            className="flex-none flex-shrink-0 w-full xl:w-1/4 sm:w-[35%]"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service?.image}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularServices;
