import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";
import { IoIosArrowRoundForward } from "react-icons/io";
import CartItem from "./CartItem";
import { CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  const { itemAmount } = useContext(CartContext);

  const isCheckoutPage = location.pathname === "/checkout";
  const shouldDisableSidebar = isCheckoutPage;

  return (
    <div>
      <div
        className={`${
          isOpen && !shouldDisableSidebar ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full md:w-[50vw] xl:max-w-[35vw] lg:px-[35px]  shadow-2xl transition-all duration-300 z-20 p-2`}
      >
        <div className="flex items-center justify-between p-3 border-b">
          <div>Shopping Bag ({itemAmount})</div>

          <div className="cursor-pointer text-gray-700 ">
            <IoIosArrowRoundForward
              className="text-4xl cursor-pointer"
              onClick={handleClose}
            />
          </div>
        </div>

        <div
          className=" flex flex-col  gap-y-3 h-[550px] lg:h-[580px] overflow-x-hidden 
        border-b "
        >
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}

          <div
            className={`${
              cart.length > 0 ? "flex" : "hidden"
            } gap-4 items-center justify-between w-full h-10`}
          >
            <div className=" ">
              <span className=""> Total : </span>${parseFloat(total).toFixed(2)}
            </div>

            <div
              onClick={clearCart}
              className="text-2xl  cursor-pointer py-4 bg-red-300 w-12 h-12 flex items-center justify-center"
            >
              <CiTrash />
            </div>
          </div>

          <Link className=" flex items-center bg-gray-200 min-h-[50px] justify-center">
            View Cart
          </Link>

          <Link
            to={cart.length > 0 ? "/checkout" : "#"}
            onClick={cart.length > 0 ? handleClose : undefined}
            className="flex items-center bg-black text-white min-h-[50px] justify-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
