import React from "react";
import Envelop from "./../../public/envelope-regular 1.png";
import PaperPlane from "./../../public/paper-plane-solid 1.png";
import Sofa from "./../../public/sofa 1.png";
import Image from "next/image";
export default function FooterHeader() {
  return (
    <div className="flex justify-between items-center ">
      <div>
        <div className="flex space-x-3">
          <Image src={Envelop} alt="envelop" className="" />
          <h1 className="font-inter font-semibold text-[18px] text-[#2f2f2f]">
            Subscribe to Newsletter
          </h1>
        </div>
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3 md:items-center my-8 ">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-[#C4C4C4] rounded-[8px] placeholder:px-3 placeholder:text-[#2F2F2F] p-1 outline-none"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className="border border-[#C4C4C4] rounded-[8px] placeholder:px-3 placeholder:text-[#2F2F2F] p-1 outline-none"
          />
          <div className="cursor-pointer hidden md:block">
            <Image
              src={PaperPlane}
              alt="plane"
              className="border border-[#C4C4C4] rounded-[8px] placeholder:px-3 placeholder:text-[#2F2F2F] p-1 outline-none"
            />
          </div>

          <div className="cursor-pointer md:hidden">
            <button className="border border-[#C4C4C4] rounded-[8px] placeholder:px-3 placeholder:text-[#2F2F2F] p-1 outline-none w-full">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <Image src={Sofa} alt="envelop" className="" />
      </div>
    </div>
  );
}
