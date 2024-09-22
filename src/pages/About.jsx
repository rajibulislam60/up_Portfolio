import React from 'react'

const About = () => {
  return (
    <div className="h-screen w-screen py-11">
      <div className="h-full w-full bg-white">
        <div className="px-[60px] py-[60px]">
          <div className="w-full border-[3px]  mx-auto relative">
            <div  className="uppercase text-[32px] font-semibold leading-[36px] bg-white absolute top-[-30px] left-[50px]">
              <h3 className='bg-black/15 px-[30px] py-2'>
                About me
              </h3>
            </div>
            <div className="py-[60px] px-[50px] text-black/50">
              <p className='text-[24px] font-medium leading-[32px]'>
                My name is Md. Rajibul Islam Rajib and I am a Web Developer, and I'm very
                passionate and dedicated to my work. With fresher as
                a professional Web Developer, I have acquired the skills and
                knowledge necessary to make your project a success. I enjoy
                every step of the developing and design process, from discussion and
                collaboration. Thanks a lot for your attention and your trust!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About