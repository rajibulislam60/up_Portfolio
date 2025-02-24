import React, { useState } from "react";
import { CgQuote } from "react-icons/cg";
import Resume from "./../../public/SimpleResume.pdf";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";

const About = () => {
  const [cvOpen, setCVOpen] = useState(false);

  const handleCVopen = () => {
    setCVOpen(true);
  };

  return (
    <div className="min-h-screen sm:w-full lg:w-full xl:w-full 2xl:w-full sm:py-2 md:py-11 mt-2 md:mt-0">
      <div className="w-full h-full bg-white">
        <div className="w-full h-full px-[20px] lg:px-[60px] py-[30px] lg:py-[60px] overflow-auto hide-scrollbar">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[18px] lg:text-[32px] font-semibold leading-[36px] bg-white absolute top-[-25px] lg:top-[-30px] left-[20px] lg:left-[50px]">
              <h3 className="bg-black/15 px-[15px] lg:px-[30px] py-1 lg:py-2">About me</h3>
            </div>
            <div className="py-[30px] lg:py-[80px] px-[20px] lg:px-[50px] text-black/50">
              <p className="text-[16px] lg:text-[24px] font-medium leading-[32px]">
              Hi, I'm Md. Rajibul Islam Rajib, a passionate Frontend Developer specializing in building responsive, user-friendly web applications. I love turning designs into interactive, pixel-perfect experiences using React.js, Next.js, JavaScript, Tailwind CSS, and the MERN stack.
              </p>
              <div className="w-full h-[3px] bg-black/15 mt-[30px] lg:mt-[60px]"></div>
              <div className="lg:flex mt-[20px] lg:mt-[60px]">
                <div className="lg:w-[50%] text-[16px] lg:text-[24px] font-normal leading-[32px] text-black/50">
                  <p className="lg:mt-3">
                    Name: <span className="ml-3">Md. Rajibul Islam Rajib</span>
                  </p>
                  <p className="lg:mt-3">
                    City: <span className="ml-9">Dhaka, Bangladesh</span>
                  </p>
                  <p className="lg:mt-3">
                    Phone:{" "}
                    <a
                      href="tel:+8801981869112"
                      className="text-black cursor-pointer"
                    >
                      +880 198 186 91 12
                    </a>
                  </p>
                  <a
                    href="https://github.com/rajibulislam60"
                    className="lg:mt-3 cursor-pointer"
                  >
                    Github: https://github.com/rajibulislam60
                  </a>
                </div>
                <div className="lg:w-[50%] text-[16px] lg:text-[24px] font-normal leading-[32px] text-black/50">
                  <p className="lg:mt-3">
                    Age: <span className="ml-11">22</span>
                  </p>
                  <p className="lg:mt-3">
                    Job: <span className="ml-12">Web Developer</span>
                  </p>
                  <p className="lg:mt-3 cursor-pointer">
                    Email:{" "}
                    <a
                      href="mailto:rajibulislam60707877@gmail.com"
                      className="text-black underline"
                    >
                      rajibulislam60707877@gmail.com
                    </a>
                  </p>
                  <p className="lg:mt-3">Freelance: Available</p>
                </div>
              </div>
              <div>
                <button
                  onClick={handleCVopen}
                  className=" text-[16px] lg:text-[24px] font-medium leading-[28px] border px-[15px] lg:px-[30px] py-1 lg:py-2 hover:bg-black/50 hover:text-white duration-[0.8s] mt-[30px] lg:mt-[50px]"
                >
                  Download CV
                </button>
                {cvOpen && (
                  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                    <div className="w-[800px] bg-white text-center p-[50px] relative">
                      <button
                        onClick={() => setCVOpen(false)}
                        className="bg-red-500 px-2 rounded-full absolute top-4 right-4 text-white"
                      >
                        X
                      </button>
                      <embed
                        src={Resume}
                        type="application/pdf"
                        className="w-full h-[900px] mb-4"
                      />
                      <a
                        href={Resume}
                        download
                        className="text-[24px] font-medium bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
                      >
                        Download My CV
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
          </div>
          <Skills/>
          <Timeline />

          <div className="w-full border-[3px] mx-auto relative mt-[30px] lg:mt-[90px]">
            <div className="uppercase text-[18px] lg:text-[32px] font-semibold leading-[36px] bg-white absolute top-[-25px] lg:top-[-30px] left-[20px] lg:left-[50px]">
              <h3 className="bg-black/15 px-[15px] lg:px-[30px] py-1 lg:py-2">Career Objective</h3>
            </div>
            <div className="py-[30px] lg:py-[80px] px-[20px] lg:px-[50px] text-black/50">
              <div className="text-[60px] lg:text-[160px]">
                <CgQuote />
              </div>
              <p className="text-[14px] lg:text-[24px] font-medium leading-[32px]">
              I am a passionate Frontend Developer specializing in React.js, Next.js, and the MERN stack, with a keen eye for building user-friendly, scalable, and high-performance web applications. My goal is to contribute to a dynamic development team where I can apply my skills in responsive design, interactive UI components, and modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
