import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  return (
    <div>
      <div className="flex justify-between px-10 py-5 items-center ">
        <div>Home</div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl cursor-pointer hover:scale-110 text-red-400 transition-all duration-300"
        >
          <CiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
