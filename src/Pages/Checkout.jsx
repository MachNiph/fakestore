import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const Checkout = () => {
  const { total, cart } = useContext(CartContext);
  return (
    <div className="py-20 px-5 p flex flex-col gap-10 md:flex-row md:justify-center ">
      <div className="lg:w-[600px]">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b border-t py-4 gap-2"
          >
            <img className="w-[50px]" src={item.image} alt="" />
            <div>
              <div>{item.title}</div>
              <div>Quantity : {item.amount}</div>
              <div>Price : {item.price * item.amount}</div>
            </div>
          </div>
        ))}
      </div>

      <form className="flex flex-col gap-4 lg:w-[600px] " id="" name="">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">Payment Details</h1>
          <p className="text-sm text-gray-600">
            Complete your order by providing your payment details.
          </p>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="email">Email</label>
          <input
            className="border h-10 p-2 justify-center"
            type="email"
            name="email"
            id="email"
            placeholder="johncena@gmail.com"
            required
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="cardholder">Cardholder Name</label>
          <input
            className="border h-10 p-2 justify-center"
            type="text"
            name="cardholder"
            id="cardholder"
            required
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="address">Address</label>
          <div className="flex flex-col gap-2 ">
            <input
              className="border h-10 p-2 justify-center"
              type="text"
              id="address"
              required
            />
            <select
              className="border h-10 p-2 justify-center"
              name=""
              id=""
              required
            >
              <option value="">Select State</option>
              <option value="">koshi province</option>
              <option value="">Madhesh province</option>
              <option value="">Janakpur province</option>
              <option value="">Bagmati Province</option>
              <option value="">Lumbini Provonce</option>
              <option value="">Gandaki Province</option>
              <option value="">SudurPaschim Province</option>
            </select>
            <input
              className="border h-10 p-2 justify-center"
              type=""
              required
            />
          </div>
        </div>

        <div className="flex justify-between border-b border-t text-lg">
          Total: <span> ${parseFloat(total).toFixed(2)}</span>
        </div>

        <button
          type="submit"
          className="border bg-black text-white items-center justify-center h-14 rounded-md w-1/2"
        >
          Place order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
