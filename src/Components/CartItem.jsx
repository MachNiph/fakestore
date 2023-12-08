import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;

  return (
    <div className="">
      <div className="flex w-full gap-6 items-center min-h-[120px] ">
        <Link to={`/product/${id}`}>
          <img className="max-w-[60px]" src={image} alt="" />
        </Link>
        <div className="flex">
          <Link
            to={`/product/${id}`}
            className="text-sm uppercase max-w-[220px] font-medium  hover:underline "
          >
            {" "}
            {title}
          </Link>
        </div>
        <div>
          <IoMdClose className="text-xl text-gray-800 font-bold cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
