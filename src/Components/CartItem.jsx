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
      <div className="flex w-full gap-4 items-center min-h-[140px] shadow-sm ">
        <Link to={`/product/${id}`}>
          <img className="max-w-[60px]" src={image} alt="" />
        </Link>
        <div className="flex gap-2 ">
          <div className="flex flex-col gap-6 justify-between min-w-[240px]">
            <div className="max-w-[240px]">
              <Link
                to={`/product/${id}`}
                className="text-sm uppercase font-medium  hover:underline "
              >
                {" "}
                {title}
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center text-xl gap-7 border w-full justify-center  cursor-pointer">
                <div
                  onClick={() => increaseAmount(id)}
                  className="bg-pink-100 w-full flex items-center justify-center"
                >
                  <FaPlus />
                </div>

                <div>{amount}</div>

                <div
                  onClick={() => decreaseAmount(id)}
                  className="bg-pink-100 w-full flex items-center justify-center"
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
              <div className="font-semibold flex items-center ">
                {`$ ${parseFloat(price * amount).toFixed(2)}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
