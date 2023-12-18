import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [mainproducts, setMainProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setMainProducts(data);
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

  //filter with category
  const filterCategory = (category) => {
    const categoryProducts = [...mainproducts];
    if (category === "all") {
      return setProducts(categoryProducts);
    } else {
      const filterValue = categoryProducts.filter((product) => {
        if (category === "mens") {
          return product.category === "men's clothing";
        } else if (category === "womens") {
          return product.category === "women's clothing";
        } else if (category === "jewelery") {
          return product.category === "jewelery";
        } else if (category === "electronics") {
          return product.category === "electronics";
        } else {
          return false;
        }
      });
      setProducts(filterValue);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, sortProductsByPrice, filterCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
