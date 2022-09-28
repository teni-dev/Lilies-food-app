/** @format */

import React from "react";
import { Footer, Special, Main, NavBar, Notify } from "../components";

const Home = () => {
  return (
    <>
      <div className="lg:px-24 px-8 lg:py-14 py-8 bg-[#00302e]">

        <NavBar />
        <Special/>
        <Main />
        <Notify />
      
      </div>

      <Footer />
   
    </>

  );
};

export default Home;