import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../Contexts/CartContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="">
      <div className="flex  gap-2 items-center min-h-[140px] shadow-sm ">
        <Link to={`/product/${id}`}>
          <img className="max-w-[60px]" src={image} alt="" />
        </Link>
        <div className="flex justify-between w-screen gap-10">
          <div className="flex flex-col justify-center gap-3  ">
            <div className="">
              <Link
                to={`/product/${id}`}
                className="text-sm uppercase font-medium  hover:underline "
              >
                {" "}
                {title}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-7 border  justify-between cursor-pointer">
                <div
                  onClick={() => increaseAmount(id)}
                  className="flex items-center justify-center"
                >
                  <FaPlus />
                </div>

                <div>{amount}</div>

                <div
                  onClick={() => decreaseAmount(id)}
                  className="flex items-center justify-center"
                >
                  <FaMinus />
                </div>
              </div>

              <div className="text-gray-500">${price}</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between">
            <IoMdClose
              onClick={() => removeFromCart(id)}
              className="text-xl text-gray-800 font-bold cursor-pointer"
            />
            <div>
              <div className="font-semibold px-2">
                ${`${parseFloat(price * amount).toFixed(2)}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
