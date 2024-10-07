import React from 'react'
import BlogItem from '../components/BlogItem';
import Web1 from "./../../public/web1.png";
import Web2 from "./../../public/web2.png";
import Web3 from "./../../public/web3.png";
import Web4 from "./../../public/web4.png";

const Blog = () => {
  return (
    <div className="w-screen h-screen py-11">
      <div className=" w-full h-full bg-white">
        <div className="w-full h-full px-[60px] py-[60px] overflow-auto hide-scrollbar">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">working project</h3>
            </div>
            <div className="px-[50px] py-[80px]">
              <BlogItem
                href="https://teapoz.vercel.app/"
                src={Web1}
                title="How to create Web Development project using React"
                date="Sept 10, 2024"
              />
              <BlogItem
                href="https://nexcent-rouge.vercel.app/"
                src={Web2}
                title="How to create Web Development project using React"
                date="Sept 10, 2024"
              />
              <BlogItem
                href="https://dark-mode-azure.vercel.app/"
                src={Web3}
                title="How to create Web Development project using React"
                date="Sept 10, 2024"
              />
              <BlogItem
                href="https://corewave-react.vercel.app/"
                src={Web4}
                title="How to create Web Development project using React"
                date="Sept 10, 2024"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog