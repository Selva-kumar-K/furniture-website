import React from "react";
import Image from "next/image";
import Image1 from "./../../public/img-grid-1.png";
import Image2 from "./../../public/img-grid-2.png";
import Image3 from "./../../public/img-grid-3.png";

export default function ProjectsSection() {
  return (
    <div className="bg-[#EFF2F1]">
      <div className="px-5 xl:px-0 xl:w-[70%] xl:mx-auto flex flex-col lg:flex-row-reverse lg:justify-between py-10">
        {/* Left Div */}
        <div className="lg:w-2/5">
          <div className="space-y-5">
            <h1 className="font-inter font-semibold text-[34px] text-[#3B5D50]">
              We help you make Modern Interior Design
            </h1>
            <p className="text-[#6A6A6A] font-inter text-[14px]">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done. the this is
              a long post for the text.`This small text has to be place here,
              since this is a place holder. You can also chane it.
            </p>
          </div>

          <div className="my-14 gap-y-8 grid md:grid-cols-2 md:place-content-center">
            <div className="md:w-[200px]">
              <ul>
                <li className="font-inter text-[14px] font-normal text-[#6A6A6A] mt-3">
                  ⨀ Donec mattis porta eros, aliquet finibus risus interdum at.
                </li>
              </ul>
            </div>
            <div className="md:w-[200px]">
              <ul>
                <li className="font-inter text-[14px] font-normal text-[#6A6A6A] mt-3">
                  ⨀ Donec mattis porta eros, aliquet finibus risus interdum at.
                </li>
              </ul>
            </div>
            <div className="md:w-[200px]">
              <ul>
                <li className="font-inter text-[14px] font-normal text-[#6A6A6A] mt-3">
                  ⨀ Donec mattis porta eros, aliquet finibus risus interdum at.
                </li>
              </ul>
            </div>
            <div className="md:w-[200px]">
              <ul>
                <li className="font-inter text-[14px] font-normal text-[#6A6A6A] mt-3">
                  ⨀ Donec mattis porta eros, aliquet finibus risus interdum at.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button className="bg-[#A3A380] text-white hover:bg-[#EFEBCE] hover:text-black rounded-full px-8 py-2">
              Explore
            </button>
          </div>
        </div>
        {/* Right Div */}
        <div className="hidden lg:block lg:w-3/5">
          <div className="flex space-x-5">
            <Image
              src={Image1}
              alt="about"
              className="w-[300px] h-[520px] bg-cover rounded-md "
            />
            <div className="flex space-y-4 flex-col">
              <Image
                src={Image2}
                alt="about"
                className="w-[200px] object-cover rounded-md "
              />
              <Image
                src={Image3}
                alt="about"
                className="h-[380px] object-cover rounded-md  relative -left-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
