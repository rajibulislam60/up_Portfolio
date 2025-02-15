import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfilePic from '../../public/Rajibul.jpg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Side = ({className}) => {
    let location = useLocation()

  return (
    <div className={`${className}`}>
      <div className="h-screen px-4  lg:px-8 py-11">
      <div className="h-full lg:w-[300px] w-[180px] bg-white flex flex-col text-center justify-center">
        <div className="lg:w-[200px] w-[140px] h-[140px] lg:h-[200px] items-center mx-auto">
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold pt-[20px] lg:pt-[50px] mb-[30px]">
            Md. Rajibul Islam Rajib
          </h2>
          <ul className="text-black/60 text-left px-2 lg:text-xl text-[16px] lg:px-8">
          <li
              className={`${
                location.pathname === "/"
                  ? "text-black border bg-teal-100"
                  : "text-primary"
              } font-semibold leading-[24px] duration-[0.4s] mt-3 relative group`}
            >
              <Link to="/" className="block px-1 lg:py-2 py-1">
                <span className="absolute inset-0 bg-teal-500 w-0 group-hover:w-full h-full transition-all duration-300"></span>
                <span className="relative group-hover:text-white z-10">HOME</span>
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/about"
                  ? "text-black border bg-teal-100"
                  : "text-primary"
              } font-semibold leading-[24px] duration-[0.4s] mt-3 relative group`}
            >
              <Link to="/about" className="block px-1 py-2">
                <span className="absolute inset-0 bg-teal-500 w-0 group-hover:w-full h-full transition-all duration-300"></span>
                <span className="relative group-hover:text-white z-10">ABOUT</span>
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/service"
                  ? "text-black border bg-teal-100"
                  : "text-primary"
              } font-semibold leading-[24px] duration-[0.4s] mt-3 relative group`}
            >
              <Link to="/service" className="block px-1 py-2">
                <span className="absolute inset-0 bg-teal-500 w-0 group-hover:w-full h-full transition-all duration-300"></span>
                <span className="relative group-hover:text-white z-10">SERVICES</span>
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/portfolio"
                  ? "text-black border bg-teal-100"
                  : "text-primary"
              } font-semibold leading-[24px] duration-[0.4s] mt-3 relative group`}
            >
              <Link to="/portfolio" className="block px-1 py-2">
                <span className="absolute inset-0 bg-teal-500 w-0 group-hover:w-full h-full transition-all duration-300"></span>
                <span className="relative group-hover:text-white z-10">PORTFOLIO</span>
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/work"
                  ? "text-black border bg-teal-100"
                  : "text-primary"
              } font-semibold leading-[24px] duration-[0.4s] mt-3 relative group`}
            >
              <Link to="/work" className="block px-1 py-2">
                <span className="absolute inset-0 bg-teal-500 w-0 group-hover:w-full h-full transition-all duration-300"></span>
                <span className="relative group-hover:text-white z-10">WORK</span>
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/contacts"
                  ? "text-black border bg-teal-100"
                  : "text-primary"
              } font-semibold leading-[24px] duration-[0.4s] mt-3 relative group`}
            >
              <Link to="/contacts" className="block px-1 py-2">
                <span className="absolute inset-0 bg-teal-500 w-0 group-hover:w-full h-full transition-all duration-300"></span>
                <span className="relative group-hover:text-white z-10">CONTACTS</span>
              </Link>
            </li>
          </ul>
          <div className="text-[14px] lg:text-[18px] font-medium leading-[26px] text-black/50 mt-5">
            <p>Copyright © 2024 by Marketify</p>
            <p>All rights are reserved</p>
          </div>
          <div className="flex justify-center gap-2 text-[22px] lg:text-[30px] mt-5">
            <a
              href="https://www.facebook.com/profile.php?id=100025401429633"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rajibul-islam-rajib-513229257"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Side