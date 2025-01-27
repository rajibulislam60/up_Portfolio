import React from 'react'
import BlogItem from '../components/BlogItem';

const Work = () => {
  return (
    <div className="w-screen h-screen py-11">
      <div className=" w-full h-full bg-white">
        <div className="w-full h-full px-[60px] py-[60px] overflow-auto hide-scrollbar">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">working project</h3>
            </div>
            <BlogItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work