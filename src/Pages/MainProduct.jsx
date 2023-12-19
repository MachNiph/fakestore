import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import Product from "./Product";
import Searchbar from "../Components/SearchBar";

const MainProduct = () => {
  const { products, sortProductsByPrice, filterCategory } =
    useContext(ProductContext);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionCategory, setSelectedOptionCategory] = useState("");

  useEffect(() => {
    if (selectedOption === "hightolow") {
      sortProductsByPrice("desc");
    } else if (selectedOption === "lowtohigh") {
      sortProductsByPrice("asc");
    }
  }, [selectedOption]);

  useEffect(() => {
    if (selectedOptionCategory === "all") {
      filterCategory("all");
    } else if (selectedOptionCategory === "mens") {
      filterCategory("mens");
    } else if (selectedOptionCategory === "womens") {
      filterCategory("womens");
    } else if (selectedOptionCategory === "jewelery") {
      filterCategory("jewelery");
    } else if (selectedOptionCategory === "electronics") {
      filterCategory("electronics");
    }
  }, [selectedOptionCategory]);

  return (
    <div className="flex flex-col p-20 items-center justify-center gap-5 md:flex-row md:items-start md:justify-between md:top-0">
      <div className="flex flex-col gap-2 items-center md:justify-start md:sticky">
        <div>
          <Searchbar products={products} />
        </div>

        <div className="border text-sm p-1  flex items-center justify-center text-gray-400">
          <select
            className="cursor-pointer"
            name=""
            id=""
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            <option className="cursor-pointer" value="" disabled>
              SORT BY
            </option>
            <option value="hightolow">Price Up</option>
            <option value="lowtohigh">Price Down</option>
          </select>
        </div>

        <div className="border text-sm p-1  flex items-center justify-center text-gray-400">
          <select
            className="cursor-pointer"
            name=""
            id=""
            onChange={(e) => setSelectedOptionCategory(e.target.value)}
            value={selectedOptionCategory}
          >
            <option className="cursor-pointer" value="" disabled>
              Category
            </option>
            <option value="all">All</option>
            <option value="mens">Mens Wear</option>
            <option value="womens">Womens Wear</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center ">
        <h1 className="font-bold text-xl border-b border-black">
          OUR <span className="text-green-500 tracking-widest ">PRODUCTS</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 ">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
