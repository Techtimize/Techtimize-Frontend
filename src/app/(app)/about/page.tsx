import Button from "@/app/components/Button/Button";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import TestimonialSlider from "@/app/components/TestimonialSlider/TestimonialSlider";
import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";
 import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("about");
}

const About = () => {
  return (
    <div>
      <PageHeader subHeading="About" heading="About Us" />
      <div className="flex flex-col sm:flex-row page-px w-full gap-[40px] gap-lg-0 justify-between items-center py-[50px]">
        <div className="sm:basis-[55%]">
          <p className="page-blue-heading xl:mb-[11px] mb-[5px]">
            Meet Our Team
          </p>
          <h4 className="page-sub-heading font-semibold xl:mb-[54px] mb-[19px]">
            We’re a Digital Professional Team
          </h4>
          <p className="text-tertiary text xl:max-w-[576px]">
            We are a leading software development company dedicated to creating
            innovative, customized solutions that empower businesses to achieve
            their goals. Our team of skilled developers, designers, and project
            managers work collaboratively to deliver high-quality software that
            meets the unique needs of each client
          </p>
          <Link href="/contact-us">
          <Button
            className="bg-blue-1  lg:h-[60px] md:h-[43px] px-[10px] h-[40px] border border-[#0B4D8E] mt-10 rounded-[7px] text-[14px] flex items-center justify-center gap-[10px]"
            text="Create your App with us"
            icon={<HiArrowLongRight size={30}  />}
            variant="outlined"
          />
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <div className="relative">
            <Image
              src={"/assets/images/aboutImg.png"}
              width={400}
              height={400}
              alt={"about"}
              className="xl:w-[400px] xl:h-[400px] w-[250px] h-[280px]"
            />
            <Image
              src={"/assets/svgs/aboutImg2.svg"}
              width={120}
              height={120}
              alt={"2 years"}
              className="absolute xl:bottom-[30px] bottom-[4%] left-[-16.6%] xl:left-[-57px] xl:w-[120px] xl:h-[120px] w-[90px] h-[90px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FBFCFF] xl:py-[50px]">
        <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
          <div className="relative py-[10px] sm:basis-[50%]">
            <Image
              src={"/assets/images/map.png"}
              width={763}
              height={472}
              alt={"map"}
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
              <div className="flex items-center xl:w-[70%] w-full xl:gap-[70px] gap-[20px] md:px-[40px] lg:px-[24%] xl:px-0 px-[20px]">
                <Image
                  src={"/assets/svgs/stat1.svg"}
                  width={170}
                  height={170}
                  alt={"stat1"}
                  className="xl:w-[170px] xl:h-[170px] w-[100px] h-[100px]"
                />
                <Image
                  src={"/assets/svgs/stat2.svg"}
                  width={170}
                  height={170}
                  alt={"stat1"}
                  className="xl:w-[170px] xl:h-[170px] w-[100px] h-[100px]"
                />
              </div>
              <div className="flex items-center justify-end xl:w-[70%] w-full xl:gap-[70px] gap-[20px] md:px-[60px] lg:px-[20%] xl:px-0 px-[20px]">
                <Image
                  src={"/assets/svgs/stat3.svg"}
                  width={170}
                  height={170}
                  alt={"stat1"}
                  className="xl:w-[170px] xl:h-[170px] w-[100px] h-[100px]"
                />
                <Image
                  src={"/assets/svgs/stat4.svg"}
                  width={170}
                  height={170}
                  alt={"stat1"}
                  className="xl:w-[170px] xl:h-[170px] w-[100px] h-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="px-[16px] py-[20px] md:p-[25px] sm:basis-[50%] xl:basis-0">
            <h4 className="page-sub-heading font-semibold xl:mb-[54px] mb-[19px]">
              Empowering Your Digital Vision
            </h4>
            <p className="text xl:w-[472px] text-black">
              Our software IT company offers top-notch web app, mobile app
              development, and a range of creative services to clients
              worldwide. With a strong team of experienced professionals, we
              have established ourselves as a leading player in the industry.
            </p>
          
            <Link href="/contact-us">
            <Button
              text="Contact Us"
              textClass="text"
              className="bg-primaryBlue rounded-[7px] text-white mt-[30px] px-[20px] py-[10px]"
            />
             </Link>
         
          </div>
        </div>
      </div>
      {/* Home Section */}
      <div className="sm:px-[25px] relative flex flex-col md:justify-center md:items-center xl:pt-[50px] xl:pb-[240px] lg:pb-[15%] sm:pb-[20%] md:pb-[20%]">
        <p className="page-blue-heading xl:mb-[11px] pt-[20px] md:pt-[40px] xl:pt-0 mb-[5px] text-center">
          Digital Solutions
        </p>
        <h4 className="page-sub-heading font-semibold xl:mb-[54px] mb-[25px] px-[16px] text-center">
          Grow Faster with Our Help
        </h4>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-[20px] xl:w-[90%] w-full px-[16px] pb-[40px]">
          <div className="flex flex-col items-center gap-[10px]">
            <Image
              src={"/assets/svgs/rating.svg"}
              width={128}
              height={128}
              alt={"rating"}
              className="xl:w-[128px] xl:h-[128px] w-[88px] h-[88px]"
            />
            <p className="xl:text-[20px] satoshi-bold xl:w-[175px] text-center text-black">
              Rating and Reviews
            </p>
            <p className="xl:w-[202px] text-center text text-tertiary">
              Boost your online reputation with our review and rating management
              software.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <Image
              src={"/assets/svgs/sales.svg"}
              width={128}
              height={128}
              alt={"rating"}
              className="xl:w-[128px] xl:h-[128px] w-[88px] h-[88px]"
            />
            <p className="xl:text-[20px] satoshi-bold xl:w-[175px] text-center text-black">
              Sales and Marketing
            </p>
            <p className="xl:w-[202px] text-center text text-tertiary">
              Revolutionize your sales and marketing with our software solutions
              today.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <Image
              src={"/assets/svgs/customerExp.svg"}
              width={128}
              height={128}
              alt={"rating"}
              className="xl:w-[128px] xl:h-[128px] w-[88px] h-[88px]"
            />
            <p className="xl:text-[20px] satoshi-bold xl:w-[175px] text-center text-black">
              Customer Experience
            </p>
            <p className="xl:w-[202px] text-center text text-tertiary">
              In the end, it's all about the customer. Build Trust and harmony
              with us.
            </p>
          </div>
        </div>
        <div className="bg-[#0697D5] sm:absolute xl:w-[70%] md:w-[90%] sm:w-[93%] sm:rounded-[10px] flex flex-col justify-center items-center xl:top-[71%] sm:top-[76%] xl:px-[60px] xl:py-[60px] lg:p-[30px] p-[16px]">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-[20px]">
            <div className="flex gap-[15px] items-center bg-white xl:p-[20px] rounded-[5px] p-[10px]">
              <Image
                src={"/assets/svgs/site.svg"}
                width={52.05}
                height={52.05}
                alt={"site"}
                className="xl:w-[52.05px] xl:h-[52.05px] w-[30px] h-[30px]"
              />
              <div>
                <p className="xl:text-[19px] md:text-[14px] text-[12px] satoshi-medium mb-[5px] text-black">
                  Customize your Site
                </p>
                <p className="xl:w-[330px] xl:text-[16px] md:text-[12px] text-tertiary text-[10px]">
                  Create a website that reflects your unique brand and vision
                  with our customizable software solutions.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] items-center bg-white xl:p-[20px] rounded-[5px] p-[10px]">
              <Image
                src={"/assets/svgs/mobile.svg"}
                width={62.46}
                height={62.46}
                alt={"mobile"}
                className="w-[40px] h-[40px] xl:w-[62.46px] xl:h-[62.46px]"
              />
              <div>
                <p className="xl:text-[19px] md:text-[14px] text-[12px] satoshi-medium mb-[5px] text-black">
                  Edit your Mobile View
                </p>
                <p className="xl:text-[16px] md:text-[12px] text-[10px] text-tertiary">
                  Our software company provides the flexibility to edit your
                  mobile view, ensuring a seamless user experience across all
                  devices
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] items-center bg-white xl:p-[20px] rounded-[5px] p-[10px]">
              <Image
                src={"/assets/svgs/feature.svg"}
                width={82.23}
                height={82.23}
                alt={"feature"}
                className="w-[50px] h-[50px] xl:w-[82.23px] xl:h-[82.23px]"
              />
              <div>
                <p className="xl:text-[19px] md:text-[14px] text-[12px] satoshi-medium mb-[5px] text-black">
                  Add advanced features
                </p>
                <p className="xl:text-[16px] md:text-[12px] text-[10px] xl:w-[330px] text-tertiary">
                  Elevate your business with our software solutions and
                  customize them with advanced features tailored.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] items-center bg-white xl:p-[20px] rounded-[5px] p-[10px]">
              <Image
                src={"/assets/svgs/optimization.svg"}
                width={59.33}
                height={59.33}
                alt={"optimization"}
                className="w-[40px] h-[40px] xl:w-[59.33px] xl:h-[59.33px]"
              />
              <div>
                <p className="xl:text-[19px] md:text-[14px] text-[12px] satoshi-medium mb-[5px] text-black">
                  Optimize for Search Engine
                </p>
                <p className="xl:text-[16px] md:text-[12px] text-[10px] xl:w-[330px] text-tertiary">
                  We help you maximize your online visibility with our
                  software's SEO optimization tools and improve your search
                  engine rankings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[20%] sm:pt-[15%] lg:pt-[15%] xl:pt-[300px] bg-[#FBFCFF]">
        <p className="page-blue-heading mt-[67px] pt-[20px] md:mt-0 mb-[3px] page-px">
          Testimonials
        </p>
        <h5 className="page-sub-heading font-semibold mb-[42px] page-px">
          Client Success Stories
        </h5>
        <div className="mb-[99px] md:mb-[118px] md:pl-[30px] md:pr-[20px] xl:pl-[60px] xl:pr-[30px] sm:pl-[20px] sm:pr-[10px] lg:mb-[144px] pb-[30px]">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default About;
