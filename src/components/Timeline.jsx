import React, { useState } from "react";

const certificatedData = [
  {
    id: 1,
    institute: "Creative IT Institute",
    skill: "MERN Stack Development",
    year: "2023-Continue",
    image: "/creative.jpg",
  },
  {
    id: 2,
    institute: "Simplilearn",
    skill: "Basic Front End Development",
    year: "2024",
    image: "/simplilearn.jpg",
  },
  {
    id: 3,
    institute: "Bohubrihi",
    skill: "Introduction to JavaScript",
    year: "2024",
    image: "/Bcertificated.png",
  },
  {
    id: 4,
    institute: "Great Learning",
    skill: "Front End Developer - HTML",
    year: "2024",
    image: "/great learning certificated.png",
  },
  {
    id: 5,
    institute: "Great Learning",
    skill: "JavaScript Projects",
    year: "2024",
    image: "/gl.png",
  },
];

const Timeline = () => {
  const [currentCertificate, setCurrentCertificate] = useState(null);

  return (
    <div className="w-full border-[3px] mx-auto relative mt-[30px] lg:mt-[90px]">
      <div className="uppercase text-[18px] lg:text-[32px] font-semibold leading-[36px] bg-white absolute top-[-25px] lg:top-[-30px] left-[20px] lg:left-[50px]">
        <h3 className="bg-black/15 px-[15px] lg:px-[30px] py-1 lg:py-2">Timeline</h3>
      </div>

      <div className="py-[10px] lg:py-[30px] px-[15px] lg:px-[50px] text-black/50">
        <h2 className="uppercase text-[16px] lg:text-[26px] font-semibold leading-[32px] text-black mt-[20px]">
          Educational Experience
        </h2>
        {certificatedData.map((item, index) => (
          <div
            key={item.id}
            className={`mt-[10px] lg:mt-[30px] ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } p-5 rounded-lg shadow-md`}
          >
            <div className="flex justify-between items-center mt-[10px] lg:mt-[30px]">
              <div>
                <h3 className="text-[16px] lg:text-[24px] font-semibold leading-[28px] text-black">
                  {item.institute}
                </h3>
                <h5 className="text-[14px] lg:text-[20px] font-medium leading-[24px] mt-[8px] lg:mt-[14px]">
                  {item.skill}
                </h5>
              </div>
              <div>
                <button
                  onClick={() => setCurrentCertificate(item.image)}
                  className="w-[70px] lg:w-[140px] text-[14px] lg:text-[20px] font-medium leading-[24px] border text-center px-2 py-2"
                >
                  {item.year}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentCertificate && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="w-[800px] bg-white text-center p-[50px] relative">
            <button
              onClick={() => setCurrentCertificate(null)}
              className="bg-red-500 px-2 rounded-full absolute top-4 right-4 text-white"
            >
              X
            </button>
            <img
              src={currentCertificate}
              alt="Certificated"
              className="w-full h-auto mb-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
