/** @format */

import React from "react";
import Teniola from "../../assets/Teniola.png";

const About = ({ onClick }) => {
  return (
    
    <div>
     
      <div className="flex justify-end font-bold text-4xl mt-2 mr-5 cursor-pointer" onClick={onClick} ></div>
      
      <div className="flex flex-col justify-center items-center lg:px-16 lg:py-14 px-10 py-8 text-center">
       
        <img src={Teniola} alt={Teniola} className="w-[50%] rounded-full" />
       
        <h2 className="mt-7 text-[#00302E] font-semibold text-2xl"> Oluwateniola Oyelakin </h2>
        
        <h3> A Frontend Developer</h3>
        
        <p className="mt-4 text-center text-xs font-normal text-black opacity-70 leading-loose">
       
        Hello there! I'm Oyelakin Oluwateniola. A self-taught Frontend Developer with specialization in frontend development. I have grounded experience in Web Development and i have frontend skills like HTML, CSS, Javascript, React and also Python. I engage in tasking and challenging projects that helps in modifying me into a better developer.
       
        </p>

        <p className="mt-8 text-sm"><a href="https://github.com/teni-dev" target="_blank"rel="noreferrer"> Github Profile </a> </p>

      </div>

    </div>
    
  );
};

export default About;