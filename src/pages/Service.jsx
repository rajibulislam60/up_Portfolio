import React from 'react'
import ServicesItem from '../components/ServicesItem';
import { BiVector } from "react-icons/bi";
import { GoBrowser } from "react-icons/go";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";

const Service = () => {
  return (
    <div className="max-h-screen sm:w-full lg:w-full xl:w-full 2xl:w-full sm:py-2 md:py-11 mt-2 md:mt-0">
      <div className="h-full w-full bg-white">
        <div className="w-full h-full px-[20px] lg:px-[60px] py-[30px] lg:py-[60px] overflow-auto hide-scrollbar">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[18px] lg:text-[32px] font-semibold leading-[36px] bg-white absolute top-[-25px] lg:top-[-30px] left-[20px] lg:left-[50px]">
              <h3 className="bg-black/15 px-[15px] lg:px-[30px] py-1 lg:py-2">Top Notch Services</h3>
            </div>
            <div className="px-[10px] lg:px-[50px] py-[20px] lg:py-[80px] grid grid-cols-2 gap-6">
            <ServicesItem icon={BiVector} itemName="Creative Design" itemDetails="Figma & UI/UX Design" />
              <ServicesItem icon={GoBrowser} itemName="Web Development" itemDetails="HTML, CSS, JavaScript, React" />
              <ServicesItem icon={RiReactjsLine} itemName="React Development" itemDetails="Modern UI with React & Next.js" />
              <ServicesItem icon={FaServer} itemName="Full Stack Development" itemDetails="MERN Stack (MongoDB, Express, React, Node)" />
              <ServicesItem icon={AiOutlineApi} itemName="API Development" itemDetails="RESTful API & third-party integrations" />
              <ServicesItem icon={MdOutlineDesignServices} itemName="Performance Optimization" itemDetails="Improving speed & SEO" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service