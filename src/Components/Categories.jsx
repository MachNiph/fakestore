import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";

const Categories = () => {
  const { filterCategory } = useContext(ProductContext);

  return (
    <div className="flex items-center flex-col py-10">
      <div className=" flex flex-col gap-2 text-2xl py-1 items-center min-w-64 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
        <div className="flex items-center justify-center relative ">
          <img
            className="w-96 h-96"
            src="https://www.permanentstyle.com/wp-content/uploads/2018/08/Panico-bespoke-trousers.jpg"
            alt=""
          />
          <Link
            to="/product"
            onClick={() => filterCategory("mens")}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
          >
            Mens Wear
          </Link>
        </div>

        <div className="flex items-center justify-center relative">
          <img
            className="h-96 w-96"
            src="https://i.pinimg.com/564x/9a/e7/8f/9ae78fc4348629665b0de0325e5dbc1f.jpg"
            alt=""
          />
          <Link
            to="/product"
            onClick={() => filterCategory("womens")}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
          >
            Women's Wear
          </Link>
        </div>

        <div className="flex items-center justify-center relative">
          <img
            className="w-96 h-96"
            src="https://i.etsystatic.com/20968434/r/il/b1053d/3429548319/il_fullxfull.3429548319_n2xv.jpg"
            alt=""
          />

          <Link
            to="/product"
            onClick={() => filterCategory("jewelery")}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
          >
            Jewellary
          </Link>
        </div>

        <div className="flex items-center justify-center relative">
          <img
            className="w-96 h-96"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <Link
            to="/product"
            onClick={() => filterCategory("electronics")}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
          >
            Technology
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
