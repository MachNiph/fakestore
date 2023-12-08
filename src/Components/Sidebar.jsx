import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";
import { FaArrowRight } from "react-icons/Fa";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  console.log(useContext(CartContext));

  return (
    <div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full md:w-[35vw] xl:max-w-[30vw] lg:px-[35px]  shadow-2xl transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <div>Shopping Bag (0)</div>
          <div className="cursor-pointer text-gray-700 ">
            <FaArrowRight className="text-xl" onClick={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
