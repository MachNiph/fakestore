import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";
import { IoIosArrowRoundForward } from "react-icons/io";
import CartItem from "./CartItem";
import { CiTrash } from "react-icons/ci";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full md:w-[35vw] xl:max-w-[30vw] lg:px-[35px]  shadow-2xl transition-all duration-300 z-20`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <div>Shopping Bag (0)</div>

          <div className="cursor-pointer text-gray-700 ">
            <IoIosArrowRoundForward
              className="text-4xl cursor-pointer"
              onClick={handleClose}
            />
          </div>
        </div>

        <div
          className=" flex flex-col gap-y-2 h-[520px] lg:h-[580px]  overflow-y-auto overflow-x-hidden
        border-b  p-6"
        >
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>

        <div
          className={`${
            cart.length > 0 ? "flex" : "hidden"
          } gap-4 items-center justify-between  bg-gray-200 w-full h-12`}
        >
          <div className="text-xl px-2 font-bold">
            <span className=""> Total : </span>${parseFloat(total).toFixed(2)}
          </div>

          <div
            onClick={clearCart}
            className="text-2xl  cursor-pointer py-4 bg-gray-300 w-12 h-12 flex items-center justify-center"
          >
            <CiTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
