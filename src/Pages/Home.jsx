import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import Product from "./Product";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";

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
    <section className=" flex flex-col items-center">
      <Hero />
      {/* <div className="flex flex-wrap gap-10 justify-center md:justify-around  md:p-5">
        {filteredProducts.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div> */}

      <Categories />
    </section>
  );
};

export default Home;
