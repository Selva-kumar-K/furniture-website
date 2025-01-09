import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import ProductSection from "./ProductSection";

export default function Header() {
  return (
    <div className="bg-[#A3A380] py-10">
      <Navbar />
      <Herosection />
    </div>
  );
}
