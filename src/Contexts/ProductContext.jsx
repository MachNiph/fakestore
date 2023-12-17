import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const sortProductsByPrice = (order) => {
    const sortedProducts = [...products];

    // Sort based on price
    sortedProducts.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    setProducts(sortedProducts);
  };

  return (
    <ProductContext.Provider value={{ products, sortProductsByPrice }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
