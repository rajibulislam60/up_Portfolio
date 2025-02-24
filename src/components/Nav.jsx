import React, { useState } from 'react';
import ProfilePic from '../../public/Rajibul.jpg';
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ className }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${className}`}>
      <div className='flex justify-between items-center sm:w-full md:w-full bg-white px-2 py-3'>
        <div className='w-[50px] h-[50px] items-center'>
          <img className='w-full h-full object-cover rounded-full' src={ProfilePic} alt="Profile" />
        </div>
        <IoMenu className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-48 z-50">
          <ul className="text-left">
            {["/", "/about", "/service", "/portfolio", "/work", "/contacts"].map(
              (path, index) => (
                <li key={index} className="mt-3">
                  <Link
                    to={path}
                    className={`block px-3 py-2 rounded-lg ${
                      location.pathname === path
                        ? "bg-teal-500 text-white"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {path.replace("/", "").toUpperCase() || "HOME"}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
