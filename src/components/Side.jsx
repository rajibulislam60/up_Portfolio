import React from 'react';
import { Link } from 'react-router-dom';


const Side = () => {
    const closeMenu = () => onClick(false);

  return (
    <div className="h-screen px-8 py-11">
      <div className="h-full w-[300px] bg-white flex flex-col text-center justify-center">
        <h2 className="text-2xl font-semibold pt-[50px]">
          Md. Rajibul Islam Rajib
        </h2>
        <ul>
          <li className="text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s]">
            <Link onClick={closeMenu} to="/">
              HOME
            </Link>
          </li>
          <li className="text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s]">
            <Link onClick={closeMenu} to="/about">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Side