import React from "react";
import FooterHeader from "./FooterHeader";
import FooterBottom from "./FooterBottom";

export default function FooterSection() {
  return (
    <div className="bg-[#EFEBCE] py-[4%]">
      <div className="px-5 xl:px-0 xl:w-[70%] xl:mx-auto">
        <FooterHeader />
        <FooterBottom />
      </div>
    </div>
  );
}
