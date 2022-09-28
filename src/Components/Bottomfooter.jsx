/** @format */

import React from "react";
import Instagram from "../Assets/Instagram.svg";
import Twitter from "../Assets/Twitter.svg";
import Youtube from "../Assets/Youtube.svg";

const FooterBottom = () => {
  return (

    <div className="flex sm:flex-row flex-col justify-between items-center bg-[#0B0D17] lg:px-24 px-8 lg:py-14 py-8 text-white border-opacity-10 border-t-[0.5px] border-white ">

      <div className="text-sm"> © 2021 LILIES, All rights reserved </div>

      <div>

        <div className="flex space-x-8 sm:mt-0 mt-8">

          <img src={Instagram} alt={Instagram} className="cursor-pointer"/>

          <img src={Twitter} alt={Twitter} className="cursor-pointer" />

          <img src={Youtube} alt={Youtube} className="cursor-pointer" />

        </div>

      </div>

    </div>
    
  );
};

export default FooterBottom;