import React from "react";
import { CgQuote } from "react-icons/cg";

const About = () => {
  return (
    <div className="w-screen h-screen py-11 overflow-auto">
      <div className="w-full bg-white">
        <div className="px-[60px] py-[60px]">
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
                    <span className="text-black ml-2">+880 198 186 91 12</span>
                  </p>
                  <p className="mt-3">
                    Github: https://github.com/rajibulislam60
                  </p>
                </div>
                <div className="w-[50%] text-[24px] font-normal leading-[32px] text-black/50">
                  <p className="mt-3">
                    Age: <span className="ml-11">22</span>
                  </p>
                  <p className="mt-3">
                    Job: <span className="ml-12">Web Developer</span>
                  </p>
                  <p className="mt-3">
                    Email:{" "}
                    <span className="text-black">
                      rajibulislam60707877@gmail.com
                    </span>
                  </p>
                  <p className="mt-3">Freelance: Available</p>
                </div>
              </div>
              <div>
                <button className="text-[24px] font-medium leading-[28px] border px-[30px] py-2 hover:bg-black/50 hover:text-white duration-[0.8s] mt-[50px]">
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div className="w-full border-[3px] mx-auto relative mt-[90px]">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">Timeline</h3>
            </div>

            <div className="py-[30px] px-[50px] text-black/50">
              <h2 className="uppercase text-[26px] font-semibold leading-[32px] text-black mt-[20px]">
                Educational Experience
              </h2>
              <div className="flex justify-between items-center mt-[30px]">
                <div>
                  <h3 className="text-[24px] font-semibold leading-[28px] text-black">
                    Creative IT Institute
                  </h3>
                  <h5 className="text-[20px] font-medium leading-[24px] mt-[14px]">
                    MERN Stack Development
                  </h5>
                </div>
                <h5 className="w-[140px] text-[20px] font-medium leading-[24px] border text-center px-2 py-2 ">
                  2023-Contine
                </h5>
              </div>
              <div className="flex justify-between items-center mt-[30px]">
                <div>
                  <h3 className="text-[24px] font-semibold leading-[28px] text-black">
                    Simplilearn
                  </h3>
                  <h5 className="text-[20px] font-medium leading-[24px] mt-[14px]">
                    Basic Front End Development
                  </h5>
                </div>
                <h5 className="w-[140px] text-[20px] font-medium leading-[24px] border text-center px-2 py-2 ">
                  2024
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full border-[3px] mx-auto relative mt-[90px]">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">Testimonials</h3>
            </div>
            <div className="py-[30px] px-[50px] text-black/50">
              <div className="text-[160px]">
                <CgQuote />
              </div>
              <p className="text-[24px] font-medium leading-[32px]">
                My name is Md. Rajibul Islam Rajib and I am a Web Developer, and
                I'm very passionate and dedicated to my work. With fresher as a
                professional Web Developer, I have acquired the skills and
                knowledge necessary to make your project a success. I enjoy
                every step of the developing and design process, from discussion
                and collaboration. Thanks a lot for your attention and your
                trust!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
