import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import Product from "./Product";
import Searchbar from "../Components/SearchBar";

const MainProduct = () => {
  const { products, sortProductsByPrice } = useContext(ProductContext);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (selectedOption === "hightolow") {
      sortProductsByPrice("desc");
    } else if (selectedOption === "lowtohigh") {
      sortProductsByPrice("asc");
    }
  }, [selectedOption]);

  return (
    <div className="flex flex-col pt-20 items-center justify-center gap-5">
      <div>
        <Searchbar products={products} />
      </div>

      <div>
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

      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default MainProduct;
