"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="px-5 xl:px-0 xl:w-[70%] xl:mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-inter font-medium text-[25px] lg:text-[30px] text-[#ffff]">
          FurniExpert
        </h1>
        <div className="hidden lg:flex items-center gap-x-16">
          <ul className="font-inter font-medium text-[16px] text-white flex items-center gap-10">
            <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
              <Link href="/">About us</Link>
            </li>
            <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
              <Link href="/">Services</Link>
            </li>
            <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
              <Link href="/">Blog</Link>
            </li>
            <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
              <Link href="/">Contact us</Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 stroke-white hover:stroke-[#EFEBCE] cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 stroke-white hover:stroke-[#EFEBCE] cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="lg:hidden">
          {mobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 stroke-white cursor-pointer hover:stroke-[#EFEBCE] "
              onClick={() => setMobileMenu((prev) => !prev)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 stroke-white cursor-pointer hover:stroke-[#EFEBCE] "
              onClick={() => setMobileMenu((prev) => !prev)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      {mobileMenu && (
        <ul className="lg:hidden font-inter font-medium text-[16px] text-white flex flex-col items-center gap-y-10 my-10">
          <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
            <Link href="/">About us</Link>
          </li>
          <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
            <Link href="/">Services</Link>
          </li>
          <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
            <Link href="/">Blog</Link>
          </li>
          <li className="hover:text-[#EFEBCE] hover:border-b-4 border-[#EFEBCE]">
            <Link href="/">Contact us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
