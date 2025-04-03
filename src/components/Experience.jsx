import React from 'react'

const Experience = () => {
  return (
    <div className="w-full border-[3px] mx-auto relative mt-[30px] lg:mt-[90px]">
      <div className="uppercase text-[18px] lg:text-[32px] font-semibold leading-[36px] bg-white absolute top-[-25px] lg:top-[-30px] left-[20px] lg:left-[50px]">
        <h3 className="bg-black/15 px-[15px] lg:px-[30px] py-1 lg:py-2">Experience</h3>
      </div>

      <div className="py-[10px] lg:py-[30px] px-[15px] lg:px-[50px] text-black/50">
      {/* 1st experience details */}
        <h2 className="text-[16px] lg:text-[26px] font-semibold leading-[32px] text-black mt-[20px]">
          Full-Stack developer Intern - Codveda Technologies
        </h2>
        <div>
        <h4 className="text-md lg:text-xl font-medium text-gray-500 mt-1">
          Mar 2025 - Present
        </h4>
        </div>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-sm lg:text-md lg:text-base">
          <li>
            Developed and maintained full-stack applications using **MongoDB, Express.js, React, and Node.js (MERN Stack)**.
          </li>
          <li>
            Integrated **RESTful APIs** for seamless data flow between frontend and backend.
          </li>
        </ul>

        {/* 2nd experience details */}
        <h2 className="text-[16px] lg:text-[26px] font-semibold leading-[32px] text-black mt-[20px]">
          Sales & Marketing Intern - Creative Business Group
        </h2>
        <div>
        <h4 className="text-md lg:text-xl font-medium text-gray-500 mt-1">
          Jan 2025 - Feb 2025
        </h4>
        </div>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-sm lg:text-md lg:text-base">
          <li>
            Students councelling and admission.
          </li>
          <li>
            Lead handling.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Experience