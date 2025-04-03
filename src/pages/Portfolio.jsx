import React from "react";
import FacebookImg from "./../../public/facebook.jpg";
import LinkedInImg from "./../../public/linkedIn.jpg";
import GithubImg from "./../../public/github.jfif";
import Hackathon from "../components/Hackathon";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100025401429633",
    imgSrc: FacebookImg,
    alt: "Facebook Profile",
    text: "Visit my Facebook",
  },
  {
    href: "https://www.linkedin.com/in/md-rajibul-islam-rajib-513229257",
    imgSrc: LinkedInImg,
    alt: "LinkedIn Profile",
    text: "Connect on LinkedIn",
  },
  {
    href: "https://github.com/rajibulislam60",
    imgSrc: GithubImg,
    alt: "GitHub Profile",
    text: "Check out my GitHub",
  },
];

const SocialLink = ({ href, imgSrc, alt, text }) => (
  <li className="relative w-full lg:w-[48%] mt-2 lg:h-[250px] overflow-hidden group">
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

const Portfolio = () => {
  return (
    <div className="max-h-screen sm:w-full lg:w-full xl:w-full 2xl:w-full sm:py-2 md:py-11 mt-2 md:mt-0">
      <div className="h-full w-full bg-white">
        <div className="w-full h-full px-[20px] lg:px-[60px] py-[30px] lg:py-[60px] overflow-auto hide-scrollbar">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[18px] lg:text-[32px] font-semibold leading-[36px] bg-white absolute top-[-25px] lg:top-[-30px] left-[20px] lg:left-[50px]">
              <h3 className="bg-black/15 px-[15px] lg:px-[30px] py-1 lg:py-2">
                Social & Professional
              </h3>
            </div>
            <div className="px-[10px] lg:px-[50px] py-[20px] lg:py-[80px]">
              <ul className="lg:flex lg:flex-wrap justify-between gap-[10px] lg:gap-[30px]">
                {socialLinks.map((link, index) => (
                  <SocialLink
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
          <Hackathon/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
