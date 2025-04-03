import React from 'react'
import LinkedInImg from "./../../public/linkedIn.jpg";

const hackathonlink = [
  {
    href: "https://devpost.com/rajibulislam60707877",
    imgSrc: "https://images.icon-icons.com/3914/PNG/512/devpost_logo_icon_249036.png",
    alt: "Devpost Hackathon Profile",
    text: "Visit my Devpost",
  },
  {
    href: "https://nuwe.io/profile",
    imgSrc: "https://lanzadera.es/wp-content/uploads/2022/04/nuwe-logo.png",
    alt: "NUWE Hackathon Profile",
    text: "Visit my NUWE",
  },
];

const HackathonDetails = ({ href, imgSrc, alt, text }) => (
  <li className="relative w-full lg:w-[48%] mt-2 lg:h-[250px] overflow-hidden group border">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block h-full w-full"
    >
      <img
        className="w-full h-full object-cover cursor-pointer duration-500 ease-in-out group-hover:scale-110"
        src={imgSrc}
        alt={alt}
      />
      <div className="absolute inset-0 bg-black/70 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500">
        <p className="text-white text-[24px] font-semibold">{text}</p>
      </div>
    </a>
  </li>
);

const Hackathon = () => {
  return (
    <div className="w-full border-[3px] mx-auto mt-[70px] relative">
            <div className="uppercase text-[18px] lg:text-[32px] font-semibold leading-[36px] bg-white absolute top-[-25px] lg:top-[-30px] left-[20px] lg:left-[50px]">
              <h3 className="bg-black/15 px-[15px] lg:px-[30px] py-1 lg:py-2">
                Hackathon
              </h3>
            </div>
            <div className="px-[10px] lg:px-[50px] py-[20px] lg:py-[80px]">
              <ul className="lg:flex lg:flex-wrap justify-between gap-[10px] lg:gap-[30px]">
                {hackathonlink.map((link, index) => (
                  <HackathonDetails
                    key={index}
                    href={link.href}
                    imgSrc={link.imgSrc}
                    alt={link.alt}
                    text={link.text}
                  />
                ))}
              </ul>
            </div>
          </div>
  )
}

export default Hackathon