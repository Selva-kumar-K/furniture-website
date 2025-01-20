import React from "react";

export default function FooterBottom() {
  return (
    <div className="my-[3%]">
      <h1 className="font-inter font-bold text-[32px]">FurniExpert</h1>

      <div className="font-inter text-[14px] text-[#6A6A6A] list-none flex flex-col space-y-7 md:space-y-0 md:flex-row md:space-x-10  my-5">
        <div className="w-2/5">
          <p className="leading-8">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is term of use page.`
          </p>
        </div>
        <div>
          <nav className="space-y-3">
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">About us</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Services</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Blog</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Contact us</li>
          </nav>
        </div>
        <div>
          <nav className="space-y-3">
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Support</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Knowledge base</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Live Chat</li>
          </nav>
        </div>
        <div>
          <nav className="space-y-3">
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Jobs</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Our Teams</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Leadership</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Privacy Policy</li>
          </nav>
        </div>
        <div>
          <nav className="space-y-3">
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Nordiac Chair</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Kruzo Aero Chair</li>
            <li className="hover:text-[#f6b561] hover:border-b-4 border-[#EFEBCE]">Ergonomic Chair</li>
          </nav>
        </div>
      </div>
    </div>
  );
}
