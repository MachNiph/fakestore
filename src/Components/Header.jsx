import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CiShoppingCart } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import MainProduct from "../Pages/MainProduct";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div
      className={`${
        isActive ? " bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="flex justify-between  px-5 items-center ">
        <Link to={"/"}>
          <div className="text-xl">
            {" "}
            <IoHome />
          </div>
        </Link>

        <Link to={"/product"}> Products</Link>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl relative cursor-pointer hover:scale-110 text-red-400 transition-all duration-300"
        >
          <CiShoppingCart />

          <div className="absolute w-4 h-4 rounded-full bg-red-300 top-0 right-0 flex items-center justify-center text-xs text-black">
            {" "}
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
