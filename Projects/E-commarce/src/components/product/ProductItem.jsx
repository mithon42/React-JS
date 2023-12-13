import React from "react";
import { products } from "../../AllData";

function ProductItem() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {products.map(({ image, name, description, price }, index) => {
        return (
          <div
            key={index}
            className="border border-primary rounded-lg overflow-hidden"
          >
            <div className="w-[100%] h-[60%] hover:opacity-50">
              <img src={image} alt={image} className="w-[350px] h-[100%]" />
            </div>
            <div className="flex flex-col p-3 mt-5 gap-3">
              <h3 className="text-3xl font-bold capitalize">{name}</h3>
              <p className="text-xl">{description}</p>
              <span className="text-2xl font-semibold text-primary">
                ${price}
              </span>
              <button className="border border-primary bg-primary hover:bg-white hover:text-primary font-semibold rounded-md text-white text-xl uppercase py-3">
                Add To Card
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductItem;
