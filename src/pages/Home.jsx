import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="h-screen w-screen py-11">
      <div className="h-full w-full bg-white flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold pt-[50px]">
          Md. Rajibul Islam Rajib
        </h2>

        <div className="text-[22px] font-semibold mt-[14px]">
          <TypeAnimation
            sequence={[
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
      </div>
    </div>
  );
};

export default Home;
