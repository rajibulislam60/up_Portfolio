import React, { useState } from "react";
import Simplilearn from "./../../public/simplilearn.jpg";
import Creative from "./../../public/creative.jpg";
import Bohubrihi from "/Bcertificated.png";
import G_learning from "/great learning certificated.png";

const Timeline = () => {
  const [currentCertificate, setCurrentCertificate] = useState(null);

  const handleCertificateShow = (certificate) => {
    setCurrentCertificate(certificate);
  };
  return (
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
          <div>
            <button
              onClick={() => handleCertificateShow("Creative")}
              className="w-[140px] text-[20px] font-medium leading-[24px] border text-center px-2 py-2"
            >
              2023-Continue
            </button>
            {currentCertificate === "Creative" && (
              <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                <div className="w-[800px] bg-white text-center p-[50px] relative">
                  <button
                    onClick={() => setCurrentCertificate(null)}
                    className="bg-red-500 px-2 rounded-full absolute top-4 right-4 text-white"
                  >
                    X
                  </button>
                  <img
                    src={Creative}
                    alt="idcard"
                    className="w-full h-auto mb-4"
                  />
                </div>
              </div>
            )}
          </div>
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
          <div>
            <button
              onClick={() => handleCertificateShow("Simplilearn")}
              className="w-[140px] text-[20px] font-medium leading-[24px] border text-center px-2 py-2"
            >
              2024
            </button>
            {currentCertificate === "Simplilearn" && (
              <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                <div className="w-[800px] bg-white text-center p-[50px] relative">
                  <button
                    onClick={() => setCurrentCertificate(null)}
                    className="bg-red-500 px-2 rounded-full absolute top-4 right-4 text-white"
                  >
                    X
                  </button>
                  <img
                    src={Simplilearn}
                    alt="certificate"
                    className="w-full h-auto mb-4"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-[30px]">
          <div>
            <h3 className="text-[24px] font-semibold leading-[28px] text-black">
              Bohubrihi
            </h3>
            <h5 className="text-[20px] font-medium leading-[24px] mt-[14px]">
              Introduction to JavaScript
            </h5>
          </div>
          <div>
            <button
              onClick={() => handleCertificateShow("Bohubrihi")}
              className="w-[140px] text-[20px] font-medium leading-[24px] border text-center px-2 py-2"
            >
              2024
            </button>
            {currentCertificate === "Bohubrihi" && (
              <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                <div className="w-[800px] bg-white text-center p-[50px] relative">
                  <button
                    onClick={() => setCurrentCertificate(null)}
                    className="bg-red-500 px-2 rounded-full absolute top-4 right-4 text-white"
                  >
                    X
                  </button>
                  <img
                    src={Bohubrihi}
                    alt="certificate"
                    className="w-full h-auto mb-4"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-[30px]">
          <div>
            <h3 className="text-[24px] font-semibold leading-[28px] text-black">
              Great Learning
            </h3>
            <h5 className="text-[20px] font-medium leading-[24px] mt-[14px]">
              Front End Developer -HTML
            </h5>
          </div>
          <div>
            <button
              onClick={() => handleCertificateShow("G_learning")}
              className="w-[140px] text-[20px] font-medium leading-[24px] border text-center px-2 py-2"
            >
              2024
            </button>
            {currentCertificate === "G_learning" && (
              <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                <div className="w-[800px] bg-white text-center p-[50px] relative">
                  <button
                    onClick={() => setCurrentCertificate(null)}
                    className="bg-red-500 px-2 rounded-full absolute top-4 right-4 text-white"
                  >
                    X
                  </button>
                  <img
                    src={G_learning}
                    alt="certificate"
                    className="w-full h-auto mb-4"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
