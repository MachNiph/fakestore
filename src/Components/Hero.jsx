import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";

const Hero = () => {
  const { filterCategory } = useContext(ProductContext);
  return (
    <div className="border-b-4">
      <div className="flex items-center h-[450px]  ">
        <div className="flex  flex-col gap-4 px-2 ">
          <h1 className="font-bold text-5xl">
            Unleash Style, Discover Comfort
          </h1>
          <p className="font-semibold text-3xl">Explore the Collection</p>
          <Link
            to="/product"
            onClick={() => filterCategory("all")}
            className="underline text-2xl "
          >
            Shop Now
          </Link>
        </div>
        <img
          className=" hidden w-2/3 sm:block "
          src="https://www.pngfind.com/pngs/b/46-465463_taylor-swift-png-transparent-image-transparent-background-fashion.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
