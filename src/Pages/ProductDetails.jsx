import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import { ProductContext } from "../Contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center">Loading...</section>
    );
  }

  const { title, price, description, image } = product;
  return (
    <div className=" h-screen flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row items-center justify-center p-20">
        <div className="flex flex-col md:flex-row md:items-center gap-4 ">
          <div className="flex items-center justify-center border p-2">
            <img className="w-2/3 " src={image} alt="" />
          </div>

          <div className="flex flex-col gap-3 md:w-[500px] lg:w-[700px] xl:w-[900px]">
            <div className="font-bold text-2xl">{title}</div>
            <div>{description}</div>
            <div className="font-semibold text-xl text-green-500">${price}</div>

            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-green-400 w-1/2 h-10 text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
