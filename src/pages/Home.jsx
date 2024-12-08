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
    <div className="h-screen w-screen py-11">
      <div className="h-full w-full bg-white flex flex-col justify-center items-center relative">
        <h2 className="text-4xl font-bold pt-[50px] z-10">
          Md. Rajibul Islam Rajib
        </h2>

        <div className="text-[22px] font-semibold mt-[14px] text-black/50 z-10">
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
        <FaReact className="text-[70px] absolute top-[250px] right-[250px] animate-spin" />
        <DiJavascript className="text-[70px] absolute bottom-[150px] right-[170px] text-black/75 animate-zoom"/>
        <RiTailwindCssFill className="text-[80px] absolute top-[180px] left-[420px] text-teal-300 " />
        <BiLogoMongodb className="text-[320px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-45 text-green-100" />
        <DiNodejs className="text-[180px] text-[#44883e] absolute bottom-[10%] left-[380px] animate-pulse"/>
        <SiExpress className="text-[50px] absolute top-[60%] left-[120px] animate-bounce"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
