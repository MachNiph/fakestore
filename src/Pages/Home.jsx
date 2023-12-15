import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import Product from "./Product";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  console.log(filteredProducts);
  return (
    <section className="py-10 ">
      <div className="flex flex-wrap gap-10 border-black items-center justify-center ">
        {filteredProducts.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default Home;
