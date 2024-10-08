import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfilePic from '../../public/Rajibul.jpg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Side = () => {
    const closeMenu = () => onClick(false);
    let location = useLocation()

  return (
    <div className="h-screen px-8 py-11">
      <div className="h-full w-[300px] bg-white flex flex-col text-center justify-center">
        <div className="w-[200px] h-[200px] items-center mx-auto">
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold pt-[50px] mb-[30px]">
            Md. Rajibul Islam Rajib
          </h2>
          <ul className="text-black/60">
            <li
              className={
                location.pathname === "/"
                  ? "text-4 font-semibold leading-[24px] text-black duration-[0.4s] mt-3"
                  : "text-4 font-semibold leading-[24px] text-primary duration-[0.4s] mt-3"
              }
            >
              <Link onClick={closeMenu} to="/">
                HOME
              </Link>
            </li>
            <li
              className={
                location.pathname === "/about"
                  ? "text-4 font-semibold leading-[24px] text-black duration-[0.4s] mt-3"
                  : "text-4 font-semibold leading-[24px] text-primary duration-[0.4s] mt-3"
              }
            >
              <Link onClick={closeMenu} to="/about">
                ABOUT
              </Link>
            </li>
            <li
              className={
                location.pathname === "/service"
                  ? "text-4 font-semibold leading-[24px] text-black duration-[0.4s] mt-3"
                  : "text-4 font-semibold leading-[24px] text-primary duration-[0.4s] mt-3"
              }
            >
              <Link onClick={closeMenu} to="/service">
                SERVICES
              </Link>
            </li>
            <li
              className={
                location.pathname === "/portfolio"
                  ? "text-4 font-semibold leading-[24px] text-black duration-[0.4s] mt-3"
                  : "text-4 font-semibold leading-[24px] text-primary duration-[0.4s] mt-3"
              }
            >
              <Link onClick={closeMenu} to="/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li
              className={
                location.pathname === "/blog"
                  ? "text-4 font-semibold leading-[24px] text-black duration-[0.4s] mt-3"
                  : "text-4 font-semibold leading-[24px] text-primary duration-[0.4s] mt-3"
              }
            >
              <Link onClick={closeMenu} to="/blog">
                BLOG
              </Link>
            </li>
            <li
              className={
                location.pathname === "/contacts"
                  ? "text-4 font-semibold leading-[24px] text-black duration-[0.4s] mt-3"
                  : "text-4 font-semibold leading-[24px] text-primary duration-[0.4s] mt-3"
              }
            >
              <Link onClick={closeMenu} to="/contacts">
                CONTACTS
              </Link>
            </li>
          </ul>
          <div className="text-[18px] font-medium leading-[26px] text-black/50 mt-5">
            <p>Copyright © 2024 by Marketify</p>
            <p>All rights are reserved</p>
          </div>
          <div className="flex justify-center gap-2 text-[30px] mt-5">
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
  );
}

export default Side