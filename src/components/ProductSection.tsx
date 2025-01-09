import { products } from "@/libs/products";
import Image from "next/image";
import React from "react";
import Product from "./Product";

export default function ProductSection() {
  return (
    <div className="bg-[#EFF2F1]">
      <div className="px-5 xl:px-0 xl:w-[70%] xl:mx-auto py-10">
        {/* //Main Div */}
        <div className="flex flex-col lg:flex-row lg:space-x-10 lg:items-center ">
          <div className="space-y-8 lg:w-1/4 ">
            <h1 className="font-inter font-semibold text-[30px]  text-[#3B5D50]">
              Crafter with excellent material
            </h1>
            <p className="font-inter font-normal text-[14px] text-[#6A6A6A]">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done.
            </p>
            <div>
              <button className="bg-[#A3A380] text-white hover:bg-[#EFEBCE] hover:text-black rounded-full px-8 py-2">
                Explore
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:space-x-5 lg:justify-between w-full">
            {products.map((product, index) => (
              <Product
                key={index}
                image={product.image}
                price={product.price}
                title={product.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
