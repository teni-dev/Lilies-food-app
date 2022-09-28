/** @format */

import React, { useRef } from "react";
import { useStateContext } from "../../context/StateContext";
import Orderitems from "./Orderitems";

function Order({ onClick }) {

  const orderRef = useRef();

  const { Orderitems, setShowOrder, onRemoveOrderitems } = useStateContext();

  console.log("Orderitems", Orderitems);

  return (

    <>

      <div className="px-12" ref={orderRef}>

        <div className="mt-14 flex space-x-3 items-center cursor-pointer" onClick={onClick}>

          <h2 className="font-semibold text-[#00302E] text-lg"> {`< Your Orders`} </h2>

          <p> {Orderitems.filter((item) => item !== 0).length}{" "} {Orderitems.length === 1 ? "Order" : "Orders"} </p>

        </div>

        {Orderitems === 0 && (

          <div className="flex flex-col justify-center items-center text-center mt-32">

            <h3 className="text-3xl text-[#00302E]]"> No order(s) made </h3>

            <button type="button" onClick={() => setShowOrder(false)} className="w-full bg-[#00302E] text-sm font-semibold text-[#F3C294] py-5 mt-10 rounded-md" > Continue Shopping </button>
          
          </div>

        )}

        <div>

          {Orderitems?.length >= 1 && (

            <div className="hidden xl:flex  justify-start mt-6 text-sm text-[#000000] opacity-70">

              <h5 className="w-[45%]"> Item </h5>

              <h5 className="flex-1"> Qty </h5>

              <h5 className="flex-1 ml-14"> Price </h5>

              <h5 className="flex-1 ml-14"> Status </h5>

            </div>

          )}

          {Orderitems?.length >= 1 &&

            Orderitems.map((item) => (

              <Orderitems key={item?._id} Cartimage={item?.image} quantity={item?.quantity} name={item?.name} price={item?.price} reMove={() => onRemoveOrderitems(item)}  orderStatus={`text-sm font-medium text-[#FF3A44]`} // #3A8F4D orderStatusText="Cooking" 
              
              />

            ))}

        </div>

      </div>

    </>

  );
}

export default Order;