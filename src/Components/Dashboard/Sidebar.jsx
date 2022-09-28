/** @format */

import React from "react";
import Logo from "../../Assets/Logo.jpg";
import Home from "../../Assets/Home.jpg";
import Profile from "../../Assets/Profile.jpg";
import Order from "../../Assets/Order.jpg";
import Cart from "../../Assets/Cart.jpg";
import Dashboarditems from "./Dashboarditems";
import { useStateContext } from "../../context/StateContext";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import LogoutIcon from '@mui/icons-material/Logout';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';


const SideBar = ({ handleShowCart, handleShowOrder, handleShowAbout }) => {
  const {
    totalQuantities,
    orderItems,
    showMobileMenu,
    setShowMobileMenu,
    logOut,
  } = useStateContext();

  return (

    <div className="bg-[#FBFBFB] lg:w-[24%] lg:py-20 py-8 px-10 ">

      <div className="flex lg:space-x-4 space-x-2 lg:justify-center items-end">
        
        <img src={Logo} alt="Lilies Food App" className="md:w-14 md:h-16 w-10"/>

        <h1 className="font-bold text-[#00302E] md:text-3xl text-2xl leading-normal tracking-wider"> Lilies{" "} </h1>
      </div>

      <div className="flex lg:hidden absolute top-11 right-11 cursor-pointer" onClick={() => setShowMobileMenu(true)} >
        
        <div>
             <DensityMediumIcon size={30} />
        </div>

      </div>

      {showMobileMenu && (

        <div className="flex lg:hidden absolute top-0 right-0 bg-[#FBFBFB] z-20 shadow-lg">

          <div className="flex flex-col space-y-7 mt-10 px-10 pb-10">

            <div className="flex justify-end text-3xl cursor-pointer" onClick={() => setShowMobileMenu(false)} >
             
              <DisabledByDefaultIcon size={30} />

            </div>

            <Dashboarditems Icon={Home} name="Dashboard" home="true" itemLink="/dashboard/" />
           
            <Dashboarditems Icon={Profile} name="Your Profile" onClick={handleShowAbout} />
            
            <Dashboarditems Icon={Order} name="Orders" onClick={handleShowOrder}  orderQty={orderItems.length >= 1 ? orderItems.length : ""} />
            
            <Dashboarditems Icon={Cart} name="Your Cart"onClick={handleShowCart} cartQty={totalQuantities >= 1 ? totalQuantities : ""} />
           
            <div className="flex justify-center items-center space-x-3 cursor-pointer">

              <LogoutIcon  />

              <h4 className="text-center font-normal" onClick={logOut}> Logout </h4>

            </div>

          </div>

        </div>

      )}

      <div className="hidden lg:flex flex-col space-y-7 mt-28 ">

        <Dashboarditems Icon={Home} name="Dashboard" home="true" itemLink="/dashboard/" />
        
        <Dashboarditems Icon={Profile}  name="Your Profile"  onClick={handleShowAbout} />
        
        <Dashboarditems Icon={Order} name="Orders"  onClick={handleShowOrder} orderQty={orderItems.length >= 1 ? orderItems.length : ""} />
       
        <Dashboarditems Icon={Cart}  name="Your Cart" onClick={handleShowCart}  cartQty={totalQuantities >= 1 ? totalQuantities : ""}  />

      </div>

    </div>
    
  );
};

export default SideBar;