import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { cart, setCart } = useState([]);

  const addToCart = (product,id) => {
    console.log(` Item  ${product.title} added to cart`);
  };

  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
