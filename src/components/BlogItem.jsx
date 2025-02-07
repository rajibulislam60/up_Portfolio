import React from 'react'

const BlogItem = () => {
  let workData = [
    {
    id:1,
    image:"/web1.png",
    name:"TeaPoz",
    details:"How to create Web Development project using React",
    date:"Sept 10, 2024",
    deploylink:"https://teapoz.vercel.app/",
    codelink:"https://github.com/rajibulislam60/teapoz",
    creater:"Rajibul Islam"
  },
  {
    id:2,
    image:"/movieSite.png",
    name:"Secret Movie",
    details:"How to create Web Development project using React",
    date:"Sept 10, 2024",
    deploylink:"https://movie-site-sage.vercel.app/",
    codelink:"https://github.com/rajibulislam60/MovieSite",
    creater:"Rajibul Islam"
  },
  {
    id:3,
    image:"/coder24.png",
    name:"Coder24",
    details:"This is Coder24 web site. This site work for competition, course details and addmition.",
    date:"Sept 10, 2024",
    deploylink:"https://coder24.vercel.app/",
    codelink:"https://github.com/rajibulislam60/Coder24",
    creater:"Rajibul Islam"
  },
  {
    id:4,
    image:"/weatherApp.png",
    name:"Weather App",
    details:"This is Weather App.",
    date:"Sept 10, 2024",
    deploylink:"https://weather-app-chi-two-58.vercel.app/",
    codelink:"https://github.com/rajibulislam60/WeatherApp",
    creater:"Rajibul Islam"
  },
  {
    id:5,
    image:"/aiChat1.png",
    name:"AI Chat App",
    details:"This project work by Next.js. This is AI chat app.",
    date:"Sept 10, 2024",
    deploylink:"https://ai-chat-ecru-iota.vercel.app/",
    codelink:"https://github.com/rajibulislam60/ai-chat",
    creater:"Rajibul Islam"
  },
  {
    id:6,
    image:"/todo.png",
    name:"To Do App",
    details:"This project work by React.js. This is Task managment app, have add, update, delete option.",
    date:"Sept 10, 2024",
    deploylink:"https://task-management-ten-beige.vercel.app/",
    codelink:"https://github.com/rajibulislam60/Task_management",
    creater:"Rajibul Islam"
  },
  {
    id:7,
    image:"/e-commerce.png",
    name:"E-Commerce Site",
    details:"This project work by React.js. There have every kind of option like- products, ads, related products, cart, add cart etc.",
    date:"Sept 10, 2024",
    deploylink:"https://e-commerce-store-six-zeta.vercel.app/",
    codelink:"https://github.com/rajibulislam60/E-Commerce_Store",
    creater:"Rajibul Islam"
  },
  {
    id:8,
    image:"/newspaper.png",
    name:"NewsPaper",
    details:"This is online newspaper site. There have every kind of option like- search option, title selection, pagination etc.",
    date:"Sept 10, 2024",
    deploylink:"https://news-paper-one.vercel.app/",
    codelink:"https://github.com/rajibulislam60/NewsPaper",
    creater:"Rajibul Islam"
  },
  {
    id:9,
    image:"/chattingApp.png",
    name:"Chatting APP",
    details:"This app for chatting app. Backend work is firebase. There have signup, signin then home page. You can add, friend list, friend request, block and chat etc.",
    date:"Sept 10, 2024",
    deploylink:"https://chatting-app-three-omega.vercel.app/signin",
    codelink:"https://github.com/rajibulislam60/chattingApp",
    creater:"Rajibul Islam"
  },
  {
    id:10,
    image:"/msgApp.png",
    name:"MSG APP Home Page",
    details:"This app for chatting app. There have signup, signin then home page.",
    date:"Sept 10, 2024",
    deploylink:"https://msg-app-psi.vercel.app/",
    codelink:"https://github.com/rajibulislam60/msgApp",
    creater:"Rajibul Islam"
  },
]
  return (
    <>
      <div className='px-5 py-5'>
        {workData.map((item, index)=>(
          <div key={item.id} className={`flex items-center justify-center gap-10 mt-[30px] ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          } p-5 rounded-lg shadow-md`}>
            <div className="flex items-center justify-center gap-10 mt-[30px]">
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
        <div className='flex gap-4'>
        <a href={item.deploylink} target="_blank" rel="noopener noreferrer">
          <button className="text-[24px] font-medium leading-[28px] border px-[30px] py-2 hover:bg-black/50 hover:text-white duration-[0.8s] mt-[30px]">
          Deploy
        </button>
        </a>
        <a href={item.codelink} target="_blank" rel="noopener noreferrer">
          <button className="text-[24px] font-medium leading-[28px] border px-[30px] py-2 hover:bg-black/50 hover:text-white duration-[0.8s] mt-[30px]">
          Code
        </button>
        </a>
        </div>
      </div>
    </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogItem