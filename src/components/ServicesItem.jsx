import React from "react";

const ServicesItem = ({ icon: Icon, itemName, itemDetails }) => {
  return (
    <div className="w-full border-2 mt-3 group transition-transform duration-300 hover:scale-105">
      <div className="text-black/50 px-5 md:px-8 lg:px-12 py-5 md:py-8 lg:py-12">
        <Icon className="text-black/50 text-[50px] md:text-[60px] group-hover:text-black transition duration-400" />
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-7 text-black mt-4">
          {itemName}
        </h3>
        <div className="w-full h-px bg-black/50 mt-6 md:mt-8 lg:mt-10"></div>
        <h5 className="text-base md:text-lg lg:text-xl font-medium leading-6 mt-6 md:mt-8 lg:mt-10">
          {itemDetails}
        </h5>
      </div>
    </div>
  );
};

export default ServicesItem;
