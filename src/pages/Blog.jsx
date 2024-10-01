import React from 'react'
import BlogItem from '../components/BlogItem';
import FacebookImg from "./../../public/facebook.jpg";

const Blog = () => {
  return (
    <div className="w-screen h-screen py-11 overflow-auto">
      <div className=" w-full bg-white">
        <div className="px-[60px] py-[60px]">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className="bg-black/15 px-[30px] py-2">working project</h3>
            </div>
            <div className="px-[50px] py-[80px]">
              <BlogItem
                href="https://www.facebook.com/profile.php?id=100025401429633"
                src={FacebookImg}
                title="How to create Web Development project using React"
                date="Sept 10, 2024"
              />
              <BlogItem
                href="https://www.facebook.com/profile.php?id=100025401429633"
                src={FacebookImg}
                title="How to create Web Development project using React"
                date="Sept 10, 2024"
              />
              <BlogItem
                href="https://www.facebook.com/profile.php?id=100025401429633"
                src={FacebookImg}
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