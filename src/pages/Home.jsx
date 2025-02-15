import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";


const Home = () => {
  return (
    <div className="h-screen sm:w-full lg:w-full xl:w-full 2xl:w-full sm:py-2 md:py-11 mt-2 md:mt-0">
      <div className="h-full w-full bg-white flex flex-col justify-center items-center relative">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-[50px] z-10">
          Md. Rajibul Islam Rajib
        </h2>

        <div className="md:text-[18px] text-[16px] lg:text-[22px] font-semibold mt-[14px] text-black/50 z-10">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1000,
              "Web Developer",
              1000,
              "Front-End Developer",
              1000,
              "Web Designer",
              1000,
            ]}
            speed={50}
            // style={{ fontSize: "18px" }}
            repeat={Infinity}
          />
        </div>
        <div className="my-5">
        <FaReact className="lg:text-[70px] md:text-[50px] text-[30px] absolute lg:top-[250px] top-[180px] left-[50px] md:top-[100px] lg:right-[250px] md:left-[50px] animate-spin" />
        <DiJavascript className="lg:text-[70px] md:text-[50px] text-[30px] absolute lg:bottom-[150px] md:bottom-[50px] md:left-[30px] lg:right-[170px] text-black/75 animate-zoom"/>
        <RiTailwindCssFill className="md:text-[50px] text-[30px] lg:text-[80px] absolute lg:top-[180px] md:top-[150px] top-[100px] md:right-[150px] right-[50px] lg:left-[420px] text-teal-300 " />
        <BiLogoMongodb className="md:text-[250px] text-[200px] lg:text-[320px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-45 text-green-100" />
        <DiNodejs className="md:text-[120px] text-[80px] lg:text-[180px] text-[#44883e] absolute bottom-[50px] lg:bottom-[10%] md:right-[100px] lg:left-[380px] animate-pulse"/>
        <SiExpress className="text-[30px] lg:text-[50px] absolute bottom-[120px] lg:top-[60%]  md:left-[100px] left-[50px] lg:left-[120px] animate-bounce"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
