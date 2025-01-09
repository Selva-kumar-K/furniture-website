import Image from "next/image";
import React from "react";
import Sofa from "./../../public/couch 1.png"

export default function Herosection() {
  return (
    <div className="px-5 xl:px-0 xl:w-[70%] xl:mx-auto py-5">
      <div className="flex items-center justify-between">
          <div className="lg:w-[380px] space-y-20">
            <div>
                <h1 className="font-inter font-semibold text-[38px] md:text-[45px] lg:text-[48px] text-[#ffff]">Modern Interior Design Studio</h1>
            </div>
            <div className="flex gap-4 items-center font-inter font-medium text-[13px]">
                <button className="bg-[#D6CE93] rounded-full px-8 py-2 hover:bg-[#EFEBCE] hover:text-black">Shop Now</button>
                <button className="border border-white rounded-full px-8 py-2 text-[#ffff] hover:bg-[#EFEBCE] hover:text-black">Explore</button>
            </div>
          </div>
          {/* Image div */}
          <div>
            <Image src={Sofa} alt="sofa" className="hidden md:block md:w-[400px] lg:w-[600px]"/>
          </div>
      </div>
    </div>
  );
}
