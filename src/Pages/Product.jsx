import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CartContext } from "../Contexts/CartContext";

const Product = ({ product }) => {
  // console.log(product);
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <div className="flex items-center justify-center">
      <div className=" flex flex-col gap-4 shadow-md items-center  w-96 py-2 hover:scale-105 transition-all duration-500 relative border-gray-200  ">
        <div className="absolute top-4 right-4  text-3xl  hover:text-red-500 opacity-0  ">
          <CiHeart />
        </div>
        <img className="w-32 h-32 " src={image} alt="" />
        <div className=" ">{title}</div>

        <Link to={`/product/${id}`}>
          <button className="border-gray-400 border shadow-sm bg-gray-100 text-red-400 w-24 h-10 font-bold ">
            ${price}
          </button>
        </Link>
        <button
          onClick={() => addToCart(product, id)}
          className="border-gray-400 border shadow-xl bg-black text-white w-32 h-12 font-bold"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
