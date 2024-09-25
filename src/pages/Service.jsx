import React from 'react'
import ServicesItem from '../components/servicesItem';
import { BiVector } from "react-icons/bi";
import { GoBrowser } from "react-icons/go";

const Service = () => {
  return (
    <div className="w-screen h-screen py-11 overflow-auto">
      <div className="h-full w-full bg-white">
        <div className="px-[60px] py-[60px]">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">Top Notch Services</h3>
            </div>
            <div className="px-[50px] py-[80px] flex justify-between">
              <ServicesItem
                icon={BiVector}
                itemName="Creative Design"
                itemDetails="Figma Design"
              />
              <ServicesItem
                icon={GoBrowser}
                itemName="Web Development"
                itemDetails="HTML Websites"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service