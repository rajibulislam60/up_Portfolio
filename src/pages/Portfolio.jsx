import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FacebookImg from './../../public/facebook.jpg'
import LinkedInImg from "./../../public/linkedIn.jpg";
import GithubImg from "./../../public/github.jfif";

const Portfolio = () => {


  return (
    <div className="w-screen h-screen py-11">
      <div className="h-full w-full bg-white">
        <div className="w-full h-full px-[60px] py-[60px] overflow-auto hide-scrollbar">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">
                Social & Professional
              </h3>
            </div>
            <div className="py-[80px] px-[50px]">
              <div>
                <ul className="flex flex-wrap justify-between gap-[30px]">
                  <li className="w-[48%] h-[250px] overflow-hidden">
                    <a
                      href="https://www.facebook.com/profile.php?id=100025401429633"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-full h-full object-cover cursor-pointer duration-500 ease-in-out hover:scale-110"
                        src={FacebookImg}
                        alt="Portfolio Image 1"
                      />
                    </a>
                  </li>
                  <li className="w-[48%] h-[250px] overflow-hidden">
                    <a
                      href="https://www.linkedin.com/in/md-rajibul-islam-rajib-513229257"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-full h-full object-cover cursor-pointer duration-500 ease-in-out hover:scale-110"
                        src={LinkedInImg}
                        alt="Portfolio Image 1"
                      />
                    </a>
                  </li>
                  <li className="w-[48%] h-[250px] overflow-hidden">
                    <a
                      href="https://github.com/rajibulislam60"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-full h-full object-cover cursor-pointer duration-500 ease-in-out hover:scale-110"
                        src={GithubImg}
                        alt="Portfolio Image 1"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio