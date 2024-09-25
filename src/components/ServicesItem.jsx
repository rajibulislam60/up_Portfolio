import React from 'react'

const servicesItem = ({ icon: Icon, itemName, itemDetails }) => {
  return (
    <div className="w-[45%] border-[2px] group">
      <div className="text-black/50 px-[50px] py-[50px]">
        <div>{<Icon className="text-black/50 text-[60px] group-hover:text-black duration-[0.4s]" />}</div>
        <h3 className="text-[24px] font-semibold leading-[28px] text-black mt-[20px]">
          {itemName}
        </h3>
        <div className="w-full h-[1px] bg-black/50 mt-[40px]"></div>
        <h5 className="text-[20px] font-medium leading-[24px] mt-[40px]">
          {itemDetails}
        </h5>
      </div>
    </div>
  );
};

export default servicesItem