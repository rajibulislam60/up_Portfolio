import React from "react";

const Contacts = () => {
  return (
    <div className="max-h-screen sm:w-full lg:w-full xl:w-full 2xl:w-full sm:py-2 md:py-11 mt-2 md:mt-0">
      <div className="w-full h-full bg-white">
        <div className="w-full h-full px-[20px] lg:px-[60px] py-[30px] lg:py-[60px] overflow-auto hide-scrollbar">
          <div className="w-full border-[3px] mx-auto relative">
            <div className="uppercase text-[18px] lg:text-[32px] font-semibold leading-[36px] bg-white absolute top-[-25px] lg:top-[-30px] left-[20px] lg:left-[50px]">
              <h3 className="bg-black/15 px-[15px] lg:px-[30px] py-1 lg:py-2">Get in Touch</h3>
            </div>
            <div className="px-[10px] lg:px-[50px] py-[20px] lg:py-[80px]">
              <div className="w-[100%] mt-2 lg:h-[400px] bg-gray-100 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.403500719404!2d90.3696994!3d23.7993585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70f5e47e3b1%3A0x85f8e342158d6a8a!2sKazipara%2C%20Mirpur%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1696242391426!5m2!1sen!2sus"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <form className="mt-[30px] max-w-100%] mx-auto">
                  <div className="mb-[20px]">
                    <label className="block text-[#194a33] text-[18px] font-medium mb-[5px]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="w-full p-[10px] border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="mb-[20px]">
                    <label className="block text-[#194a33] text-[18px] font-medium mb-[5px]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="demo@gmail.com"
                      className="w-full p-[10px] border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="mb-[20px]">
                    <label className="block text-[#194a33] text-[18px] font-medium mb-[5px]">
                      Phone
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="phone"
                      className="w-full p-[10px] border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="mb-[20px]">
                    <label className="block text-[#194a33] text-[18px] font-medium mb-[5px]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="message"
                      className="w-full p-[10px] border border-gray-300 rounded-lg h-[150px]"
                    />
                  </div>
                  <button className="text-[16px] lg:text-[24px] font-medium leading-[20px] lg:leading-[28px] border px-3 lg:px-[30px] py-2 hover:bg-black/50 hover:text-white duration-[0.8s] mt-[12px] lg:mt-[30px]">
                    Send Messaage
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
