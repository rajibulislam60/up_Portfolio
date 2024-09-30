import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import tryImg from './../../public/Rajibul.jpg'

const Portfolio = () => {
    let [isVisible, setIsVisible] = useState(false)

    let handleShow= ()=> {
        setIsVisible(!isVisible)
    }

  return (
    <div className="w-screen h-screen py-11 overflow-auto">
      <div className="h-full w-full bg-white">
        <div className="px-[60px] py-[60px]">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">
                Social & Professional
              </h3>
            </div>
            <div className="py-[80px] px-[50px]">
              <div>
                <ul>
                  <li>
                    <img
                      onClick={handleShow}
                      className="w-[400px]"
                      src={tryImg}
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              {isVisible && (
                <div className="w-[800px] h-[800px]">
                  <Link to="https://www.facebook.com/profile.php?id=100025401429633"> new tap</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio