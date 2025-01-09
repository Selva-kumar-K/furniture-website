import Image, { StaticImageData } from "next/image";
import React from "react";
import Product1 from "./../../public/product-1.png";

interface Product {
  image: StaticImageData;
  price: number;
  title: string;
}

export default function Product({ image, title, price }: Product) {
  return (
    <div className="group my-20 transition w-full">
      <div className="group-hover:bg-[#35736E]/10 flex flex-col justify-center flex-grow items-center place-content-stretch text-center group-hover:transition group-hover:transform group-hover:ease-in-out group-hover:rounded-xl relative">
        <div className="group-hover:relative space-y-5 group-hover:-top-16 group-hover:transition group-hover:duration-200 group-hover:delay-200">
          <div className="h-[350px] flex flex-col justify-between">
            <Image
              src={image}
              alt="image"
              width={180}
              height={180}
              className="object-cover"
            />

            <div className="">
              <h1 className="font-inter font-semibold text-[16px]">{title}</h1>
              <p className="font-inter font-bold text-[18px]">${price}</p>
            </div>
          </div>
        </div>
        <div className="hidden group-hover:block absolute -bottom-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12 fill-black stroke-white hover:fill-slate-700 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
