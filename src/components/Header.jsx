import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between 2xl:mx-20 xl:mx-20 md:mx-20 sm:mx-3 mx-3 items-center">
      <div>
        <img className="w-38 h-20" src={Logo} alt="" />
      </div>
      <div>
        <button className="bg-[#413c69] text-white px-4 py-2 rounded-sm font-semibold mt-3">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default Header;
