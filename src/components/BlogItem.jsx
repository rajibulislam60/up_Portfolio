import React from 'react'


const BlogItem = ({ href, src, title, date, videoSrc }) => {
  return (
    <div className="flex items-center gap-10 mt-[30px]">
      <div className="w-[48%] h-[250px] relative">
        <div className=" w-full h-full overflow-hidden">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img
              className="w-full h-full cursor-pointer duration-500 ease-in-out hover:scale-110 relative"
              src={src}
              alt="Portfolio Image 1"
            />
            <video
              className="w-full h-full cursor-pointer duration-500 ease-in-out hover:scale-110 relative"
              src={videoSrc}
             
            />
          </a>
        </div>
        <h4 className="px-6 py-2 bg-white text-black absolute top-7 left-7">
          {date}
        </h4>
      </div>
      <div className="w-[48%]">
        <h5 className="text-[20px] font-medium leading-[24px] text-black/50">
          by{" "}
          <span className="text-[24px] font-semibold leading-[28px]">
            Rajibul Islam Rajib
          </span>
        </h5>
        <div className="w-full h-[2px] bg-black/20 mt-5 mb-5"></div>

        <h2 className="text-[24px] font-semibold leading-[28px]">{title}</h2>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <button className="text-[24px] font-medium leading-[28px] border px-[30px] py-2 hover:bg-black/50 hover:text-white duration-[0.8s] mt-[30px]">
          Read more
        </button>
        </a>
        
      </div>
    </div>
  );
};

export default BlogItem