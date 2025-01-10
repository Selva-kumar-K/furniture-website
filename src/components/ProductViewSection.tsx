import Image from "next/image";
import React from "react";
import Product1 from "./../../public/product-1.png";
import Product2 from "./../../public/product-2.png";
import Product3 from "./../../public/product-3.png";
import Link from "next/link";

export default function ProductViewSection() {
  return (
    <div className="bg-[#EFEBCE]/30">
      <div className="px-5 xl:px-0 xl:w-[70%] xl:mx-auto py-20 grid md:grid-cols-2 gap-x-10 gap-y-10 lg:space-y-0 lg:flex lg:flex-row lg:space-x-14 lg:gap-x-0">
        {/* First Div */}
        <div className="lg:w-[400px]">
          {/* <!-- Main div --> */}
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 ">
            <div className="bg-[#6A6A6A]/30 rounded-xl flex justify-center items-center p-5 ">
              <Image
                src={Product1}
                className="h-full rounded-xl bg-cover"
                alt="image1"
              />
            </div>
            {/* 
      <!-- Content div --> */}

            <div className="flex flex-col justify-between">
              <h1 className="font-inter font-bold text-[14px]">
                Nordiac Chair
              </h1>
              <p className="font-inter font-normal text-[14px] text-[#6A6A6A]">
                Donec mattis porta eros, aliquet finibus risus in. Donecd
              </p>
              <Link
                href="/"
                className="font-inter font-semibold text-[12px] text-[#6A6A6A] hover:text-[#3B5D50]"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* Second div */}
        <div className="lg:w-[400px]">
          {/* <!-- Main div --> */}
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
            <div className="bg-[#35736E]/30 rounded-xl flex justify-center items-center p-5 ">
              <Image
                src={Product2}
                className="h-full rounded-xl bg-cover"
                alt="image2"
              />
            </div>
            {/* 
      <!-- Content div --> */}

            <div className="flex flex-col justify-between">
              <h1 className="font-inter font-bold text-[14px]">
                Nordiac Chair
              </h1>
              <p className="font-inter font-normal text-[14px] text-[#6A6A6A]">
                Donec mattis porta eros, aliquet finibus risus in. Donecd
              </p>
              <Link
                href="/"
                className="font-inter font-semibold text-[12px] text-[#6A6A6A] hover:text-[#3B5D50]"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* Third div */}

        <div className="lg:w-[400px]">
          {/* <!-- Main div --> */}
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
            <div className="bg-[#6A6A6A]/30 rounded-xl flex justify-center items-center p-5">
              <Image
                src={Product3}
                className="h-full rounded-xl bg-cover"
                alt="image3"
              />
            </div>
            {/* 
      <!-- Content div --> */}

            <div className="flex flex-col justify-between">
              <h1 className="font-inter font-bold text-[14px]">
                Nordiac Chair
              </h1>
              <p className="font-inter font-normal text-[14px] text-[#6A6A6A]">
                Donec mattis porta eros, aliquet finibus risus in. Donecd
              </p>
              <Link
                href="/"
                className="font-inter font-semibold text-[12px] text-[#6A6A6A] hover:text-[#3B5D50]"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* Exsisting Div */}
        {/* <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
          <div className="lg:w-2/5 h-[120px] flex lg:justify-between space-x-5">
            <div className="bg-[#6A6A6A]/30 rounded-xl flex justify-center items-center p-5 ">
              <Image src={Product1} alt="image1" className="relative -top-5" />
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-inter font-bold text-[14px]">Nordic Chair</h1>
              <p className="font-inter font-normal text-[14px] text-[#6A6A6A]">
                Donec mattis porta eros, aliquet finibus risus in. Donecd{" "}
              </p>
              <Link
                href="/"
                className="font-inter font-semibold text-[12px] text-[#6A6A6A] hover:text-[#3B5D50]"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5 h-[120px] flex lg:justify-between space-x-5 ">
            <div className="bg-[#35736E]/30 rounded-xl flex justify-center items-center p-5 ">
              <Image src={Product2} alt="image1" className="relative -top-5" />
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-inter font-bold text-[14px]">Kruzi Aero</h1>
              <p className="font-inter font-normal text-[14px] text-[#6A6A6A]">
                Donec mattis porta eros, aliquet finibus risus in. Donecd{" "}
              </p>
              <Link
                href="/"
                className="font-inter font-semibold text-[12px] text-[#6A6A6A] hover:text-[#3B5D50]"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5 h-[120px] flex space-x-5">
            <div className="bg-[#6A6A6A]/30 rounded-xl flex justify-center items-center p-5 ">
              <Image src={Product3} alt="image1" className="relative -top-5" />
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-inter font-bold text-[14px]">Ergonomic Chair</h1>
              <p className="font-inter font-normal text-[14px] text-[#6A6A6A]">
                Donec mattis porta eros, aliquet finibus risus in. Donecd{" "}
              </p>
              <Link
                href="/"
                className="font-inter font-semibold text-[12px] text-[#6A6A6A] hover:text-[#3B5D50]"
              >
                Read more
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
