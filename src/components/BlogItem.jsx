import React from 'react'


const BlogItem = ({ href, src, title, date, videoSrc }) => {
  let workData = [{
    id:1,
    image:"/web1.png",
    name:"TeaPoz",
    details:"How to create Web Development project using React",
    date:"Sept 10, 2024",
    link:"https://teapoz.vercel.app/",
    creater:"Rajibul Islam"
  },
  {
    id:2,
    image:"/movieSite.png",
    name:"Secret Movie",
    details:"How to create Web Development project using React",
    date:"Sept 10, 2024",
    link:"https://movie-site-sage.vercel.app/",
    creater:"Rajibul Islam"
  },
  {
    id:3,
    image:"/coder24.png",
    name:"Coder24",
    details:"This is Coder24 web site. This site work for competition, course details and addmition.",
    date:"Sept 10, 2024",
    link:"https://coder24.vercel.app/",
    creater:"Rajibul Islam"
  },
  {
    id:4,
    image:"/weatherApp.png",
    name:"Weather App",
    details:"This is Weather App.",
    date:"Sept 10, 2024",
    link:"https://weather-app-chi-two-58.vercel.app/",
    creater:"Rajibul Islam"
  },
  {
    id:5,
    image:"/aiChat1.png",
    name:"AI Chat App",
    details:"This project work by Next.js. This is AI chat app.",
    date:"Sept 10, 2024",
    link:"https://ai-chat-ecru-iota.vercel.app/",
    creater:"Rajibul Islam"
  },
  {
    id:6,
    image:"/todo.png",
    name:"To Do App",
    details:"This project work by React.js. This is Task managment app, have add, update, delete option.",
    date:"Sept 10, 2024",
    link:"https://task-management-ten-beige.vercel.app/",
    creater:"Rajibul Islam"
  },
  {
    id:7,
    image:"/e-commerce.png",
    name:"E-Commerce Site",
    details:"This project work by React.js. There have every kind of option like- products, ads, related products, cart, add cart etc.",
    date:"Sept 10, 2024",
    link:"https://e-commerce-store-six-zeta.vercel.app/",
    creater:"Rajibul Islam"
  },

]
  return (
    <>
      <div>
        {workData.map((item)=>(
          <div key={item.id}>
            <div className="flex items-center gap-10 mt-[30px]">
      <div className="w-[48%] h-[250px] relative">
        <div className=" w-full h-full overflow-hidden">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={item.name} />
          </a>
        </div>
        <h4 className="px-6 py-2 bg-white text-black absolute top-7 left-7">
          {item.date}
        </h4>
      </div>
      <div className="w-[48%]">
        <h5 className="text-[20px] font-medium leading-[24px] text-black/50">
          by{" "}
          <span className="text-[24px] font-semibold leading-[28px]">
            {item.creater}
          </span>
        </h5>
        <div className="w-full h-[2px] bg-black/20 mt-5 mb-5"></div>
        <h2 className="text-[24px] font-semibold leading-[28px]">{item.name}</h2>
        <h2 className="text-[18px] font-medium leading-[24px] mt-2">{item.details}</h2>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <button className="text-[24px] font-medium leading-[28px] border px-[30px] py-2 hover:bg-black/50 hover:text-white duration-[0.8s] mt-[30px]">
          Read more
        </button>
        </a>
      </div>
    </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogItem