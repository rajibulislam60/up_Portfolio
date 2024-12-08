import React, { useState } from "react";
import { CgQuote } from "react-icons/cg";
import Resume from "./../../public/Rajibul_Islam.pdf";
import Timeline from "../components/Timeline";

const About = () => {
  const [cvOpen, setCVOpen] = useState(false);

  const handleCVopen = () => {
    setCVOpen(true);
  };

  return (
    <div className="w-screen h-screen py-11">
      <div className="w-full h-full bg-white">
        <div className="w-full h-full px-[60px] py-[60px] overflow-auto hide-scrollbar">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">About me</h3>
            </div>
            <div className="py-[80px] px-[50px] text-black/50">
              <p className="text-[24px] font-medium leading-[32px]">
                My name is Md. Rajibul Islam Rajib and I am a Web Developer, and
                I'm very passionate and dedicated to my work. With fresher as a
                professional Web Developer, I have acquired the skills and
                knowledge necessary to make your project a success. I enjoy
                every step of the developing and design process, from discussion
                and collaboration. Thanks a lot for your attention and your
                trust!
              </p>
              <div className="w-full h-[3px] bg-black/15 mt-[60px]"></div>
              <div className="flex mt-[60px]">
                <div className="w-[50%] text-[24px] font-normal leading-[32px] text-black/50">
                  <p className="mt-3">
                    Name: <span className="ml-3">Md. Rajibul Islam Rajib</span>
                  </p>
                  <p className="mt-3">
                    City: <span className="ml-9">Dhaka, Bangladesh</span>
                  </p>
                  <p className="mt-3">
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
                    className="mt-3 cursor-pointer"
                  >
                    Github: https://github.com/rajibulislam60
                  </a>
                </div>
                <div className="w-[50%] text-[24px] font-normal leading-[32px] text-black/50">
                  <p className="mt-3">
                    Age: <span className="ml-11">22</span>
                  </p>
                  <p className="mt-3">
                    Job: <span className="ml-12">Web Developer</span>
                  </p>
                  <p className="mt-3 cursor-pointer">
                    Email:{" "}
                    <a
                      href="mailto:rajibulislam60707877@gmail.com"
                      className="text-black underline"
                    >
                      rajibulislam60707877@gmail.com
                    </a>
                  </p>
                  <p className="mt-3">Freelance: Available</p>
                </div>
              </div>
              <div>
                <button
                  onClick={handleCVopen}
                  className="text-[24px] font-medium leading-[28px] border px-[30px] py-2 hover:bg-black/50 hover:text-white duration-[0.8s] mt-[50px]"
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
          <Timeline />

          <div className="w-full border-[3px] mx-auto relative mt-[90px]">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">Career Objective</h3>
            </div>
            <div className="py-[30px] px-[50px] text-black/50">
              <div className="text-[160px]">
                <CgQuote />
              </div>
              <p className="text-[24px] font-medium leading-[32px]">
                My name is Md. Rajibul Islam Rajib, and I am a passionate and
                dedicated Web Developer specializing in the MERN stack. With
                experience in MongoDB, Express.js, React.js, Node.js, and tools
                like Tailwind CSS, Bootstrap, and React Icons, I have the skills
                to create responsive, user-friendly web applications. As a
                fresher, I have worked on developing reusable components,
                implementing dark/light themes, designing interactive UIs, and
                integrating routing structures in React projects. I take pride
                in every step of the development and design process, from
                discussing ideas to collaborating on solutions. Thank you for
                your trust and attention—I'm excited to bring value to your
                projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
