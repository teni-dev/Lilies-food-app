/** @format */

import React from "react";
import Footerlink from "./Footerlink";
import Footerplaystore from "../Assets/Footerplaystore.jpg";
import Footerappstore from "../Assets/Footerappstore.jpg";
import Bottomfotter from "./Bottomfooter";

const Footer = () => {
  return (

    <div className="footer">

      <div className="flex md:flex-row flex-col justify-between  bg-[#0B0D17] text-white lg:px-24 px-8 lg:py-16 py-8">

        <div>

          <h1 className="text-lg font-medium"> Company </h1>

          <Footerlink>

            <h4> About Us </h4>
            <h4> Careers </h4>
            <h4> Contact Us </h4>

          </Footerlink>

        </div>

        <div>

          <h1 className="text-lg font-medium"> Support </h1>

          <Footerlink>

            <h4> Help Center </h4>
            <h4> Safety Center </h4>

          </Footerlink>

        </div>

        <div>

          <h1 className="text-lg font-medium"> Legal </h1>

          <Footerlink>

            <h4> Cookies Policy </h4>
            <h4> Privacy Policy  </h4>
            <h4> Terms of Service </h4>
            <h4> Dispute Resolution </h4>

          </Footerlink>

        </div>

        <div>
          <h1 className="text-lg font-medium"> Install App </h1>

          <Footerlink>

            <img src={Footerplaystore} alt={Footerplaystore} className="md:w-full w-40" />
           
            <img src={Footerappstore} alt={Footerappstore} className="md:w-full w-40"/>
          
          </Footerlink>

        </div>

      </div>

      <Bottomfotter />

    </div>

  );
};

export default Footer;