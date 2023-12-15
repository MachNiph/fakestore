import React from "react";
import { Link } from "react-router-dom";
// import womens from "/img/womens.avif";

const Hero = () => {
  return (
    <div className="">
      <div className="flex w-screen gap-6 py-32 h-[500px] ">
        <div className="flex w-1/4 flex-col gap-4 px-2 ">
          <h1 className="font-bold text-2xl">
            Unleash Style, Discover Comfort
          </h1>
          <p className="font-semibold text-xl">Explore the Collection</p>
          <Link to="/" className="underline ">
            Shop Now
          </Link>
        </div>
        <img
          className="w-2/3 "
          src="https://www.pngfind.com/pngs/b/46-465463_taylor-swift-png-transparent-image-transparent-background-fashion.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
