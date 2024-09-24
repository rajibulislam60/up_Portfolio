import React from 'react'

const Service = () => {
  return (
    <div className="w-screen h-screen py-11 overflow-auto">
      <div className="h-full w-full bg-white">
        <div className="px-[60px] py-[60px]">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">Top Notch Services</h3>
            </div>
            <h2 className="text-4xl font-bold pt-[50px]">
              Md. Rajibul Islam Rajib
            </h2>

            <div className="text-[22px] font-semibold mt-[14px]">services</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service