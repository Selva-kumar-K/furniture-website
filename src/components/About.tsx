import React from "react";
import AboutImage from "./../../public/choose-us.png"
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#EFF2F1]">
      <div className="px-5 xl:px-0 xl:w-[70%] xl:mx-auto flex flex-col lg:flex-row lg:justify-between py-10">
        {/* Left Div */}
        <div className="lg:w-1/2">
          <div className="space-y-5">
            <h1 className="font-inter font-semibold text-[34px] text-[#3B5D50]">
              Why Choose Us
            </h1>
            <p className="text-[#6A6A6A] font-inter text-[14px]">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done. the
            </p>
          </div>

          <div className="my-14 gap-y-8 grid md:grid-cols-2 md:place-content-center">
            <div className="md:w-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <h1 className="font-inter text-[14px] font-semibold">
                Fast and Free Shipping
              </h1>
              <p className="font-inter text-[14px] font-normal text-[#6A6A6A] mt-3">
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
            <div className="md:w-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <h1 className="font-inter text-[14px] font-semibold">
                Easy to Shop
              </h1>
              <p className="font-inter text-[14px] font-normal text-[#6A6A6A] mt-3">
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
            <div className="md:w-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
                />
              </svg>

              <h1 className="font-inter text-[14px] font-semibold">
                24/7 Support
              </h1>
              <p className="font-inter text-[14px] font-normal text-[#6A6A6A] mt-3">
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
            <div className="md:w-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                />
              </svg>

              <h1 className="font-inter text-[14px] font-semibold">
                Hassle Free Returns
              </h1>
              <p className="font-inter text-[14px] font-normal text-[#6A6A6A] mt-3">
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
          </div>
        </div>
        {/* Right Div */}
        <div className="hidden lg:block lg:w-2/5">
        <div>
            <Image src={AboutImage} alt="about" className="h-[550px] object-cover rounded-md" />
        </div>
        </div>
      </div>
    </div>
  );
}
