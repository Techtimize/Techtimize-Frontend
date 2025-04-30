import React, { Suspense } from "react";
import { services } from "@/app/constants/services";
import ProjectLogoSlider from "./components/ProjectLogoSlider";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Link from "next/link";
import type { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import ProjectList from "./http/fetchproduct";
import CommentSlider from "./http/fetchtestimonial";
import { Skeleton } from "@/components/ui/skeleton";

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("home");
}

export default async function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <Stats />
      <div className="pt-20 pb-10">
        <ProjectLogoSlider />
      </div>

      {/* Services Section */}
      <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col xl:gap-[135px] lg:gap-[135px] pb-[10px] justify-between bg-[#FBFCFF]">
        <div className="xl:ml-[63px] sm:pl-[25px] md:pl-[30px] lg:pl-[40px] sm:pr-0 px-[16px]">
          <p className="text-blue-1 xl:mt-[50px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px]">
            What do we do?
          </p>
          <h3 className="page-sub-heading font-bold xl:mb-[54px] mb-[19px]">
            Our Services
          </h3>
          <p className="text text-darkGrey xl:max-w-[397px] max-w-[342px] xl:mb-[70px] md:mb-[42px] mb-[55px]">
            With a focus on innovation, creativity, and reliability, we aim to
            help businesses stay ahead in the ever-evolving digital landscape.
          </p>
          <Link href="/hiring-staff/need-to-consult">
            <Button variant="outline" className="bg-[#0B4D8E] h-12 text-white">
              Book a Quote
            </Button>
          </Link>
        </div>

        {/* Service Cards with Skeleton */}
        <div className="xl:mr-[70px] sm:pr-[20px] md:pr-[25px] lg:pr-[30px] md:mt-[84px] sm:mt-[84px] xl:mt-[98px] mt-[55px] overflow-hidden">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:px-0 px-[16px] gap-4">
            {services.length > 0 ? (
              services.map((item) => (
                <Link key={item._id} href={`/services/?service=${item.type}`} className="w-full">
                  <CardContent className="hover:scale-105 transition-transform duration-200 w-full">
                    <div className="flex items-center space-x-4 rounded-md border p-4 w-full overflow-hidden">
                      <Image src={item.iconUrl} alt={item.serviceName} width={30} height={30} />
                      <div className="flex-1 space-y-1 min-w-0">
                        <p className="text-sm font-medium leading-none break-words truncate">
                          {item.serviceName}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              ))
            ) : (
              // Skeleton Loader
              [...Array(6)].map((_, index) => (
                <Skeleton key={index} className="h-[80px] w-full rounded-md" />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div>
        <p className="page-blue-heading xl:px-[100px] lg:px-[40px] md:px-[30px] xl:mt-[50px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px] sm:px-[25px] px-[20px]">
          Our Work
        </p>
        <h3 className="page-sub-heading xl:px-[100px] lg:px-[40px] md:px-[30px] font-bold xl:mb-[24px] mb-[19px] sm:px-[25px] px-[20px]">
          Our Portfolio
        </h3>

        <div className="xl:pl-[84px] xl:pr-[30px] lg:pl-[30px] lg:pr-[10px] lg:px-0 md:px-[18px] sm:px-[18px]">
          <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-md" />}>
            <ProjectList />
          </Suspense>
        </div>

        <div className="flex items-center justify-center mt-[46px]">
          <Link href={"/projects"}>
            <Button variant="outline" className="bg-[#0B4D8E] h-12 text-white">
              View all Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="sm:mt-[60px]">
        <p className="page-blue-heading mt-[67px] md:mt-0 mb-[3px] sm:px-[25px] px-[23px] md:px-[30px] lg:px-[40px] xl:px-[100px]">
          Testimonials
        </p>
        <h5 className="page-sub-heading font-semibold mb-[42px] px-[23px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[100px]">
          Client Success Stories
        </h5>
        <div className="mb-[99px] md:mb-[118px] md:pl-[30px] md:pr-[20px] xl:pl-[100px] xl:pr-[30px] sm:pl-[20px] sm:pr-[10px] lg:mb-[100px]">
          <Suspense fallback={<Skeleton className="h-[200px] w-full rounded-md" />}>
            <CommentSlider />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
