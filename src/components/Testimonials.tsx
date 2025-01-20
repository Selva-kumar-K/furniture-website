import Image from "next/image";

import { testimonials } from "@/libs/testimonials";

export default function Testimonials() {
  return (
    <div className="px-3 xl:px-0 xl:w-[70%] py-10 xl:mx-auto">
      <h1 className="font-inter font-semibold leading-[41px] text-[34px] text-[#3B5D50] text-center">
        Testimonials
      </h1>

      <div>
        <div className="flex justify-between items-center space-x-4 ">
          {/* Left Arrow */}
          <div className="bg-slate-100/70 inline-block rounded-full p-2 hover:bg-orange-200/50 flex-shrink-0 h-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 md:size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          {/* Testimonial */}
          <div className="w-[100%] flex overflow-x-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`w-[100%] my-[4%] flex-shrink-0 space-x-5 xl:space-x-0`}>
                <p className="font-inter text-black md:leading-8 text-[14px] leading-2 md:text-[16px]">
                  {testimonial.text}
                </p>
                <div className="flex flex-col items-center space-y-2 my-[5%]">
                  <Image
                    src={testimonial.image}
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h2 className="font-inter text-[18px] text-black">
                    {testimonial.name}
                  </h2>
                  <p className="font-inter leading-8 text-[13px] text-[#2F2F2F]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <div className="bg-slate-100/70 inline-block rounded-full p-2 hover:bg-orange-200/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 md:size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
