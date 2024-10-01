import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../../public/Rajibul.jpg'


const Side = () => {
    const closeMenu = () => onClick(false);

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
          <ul>
            <li className="text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s] mt-3">
              <Link onClick={closeMenu} to="/">
                HOME
              </Link>
            </li>
            <li className="text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s] mt-3">
              <Link onClick={closeMenu} to="/about">
                ABOUT
              </Link>
            </li>
            <li className="text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s] mt-3">
              <Link onClick={closeMenu} to="/service">
                SERVICES
              </Link>
            </li>
            <li className="text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s] mt-3">
              <Link onClick={closeMenu} to="/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li className="text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s] mt-3">
              <Link onClick={closeMenu} to="/blog">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side