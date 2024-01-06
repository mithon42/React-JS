import React from "react";
import { products } from "../data";
import { FaShoppingCart } from "react-icons/fa";

const ProductPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-around gap-4">
        {products.map(({ id, name, price, imgUrl }, index) => {
          return (
            <div key={index} className="text-center bg-red-100 p-4 rounded-md">
              <img src={imgUrl} alt={id} />
              <div className="flex justify-between py-2">
                <span>{name}</span>
                <h4 className="font-semibold text-lg">${price}</h4>
              </div>
              <div className="flex justify-between">
                <button className="bg-[#C1824F] py-1 px-3 rounded-md text-white font-semibold flex items-center gap-2">
                  <span>Add to Card</span>
                  <FaShoppingCart />
                </button>
                <button className="bg-[#C1824F] py-1 px-3 rounded-md text-white font-semibold">
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
