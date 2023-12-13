/* eslint-disable react/prop-types */
import React from "react";

const ProductCards = ({ gridList, products }) => {
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        gridList ? "grid" : "list"
      }`}
    >
      {
        products.map((product, i) =>{
          <div key={i} className="col-lg-4 col-md-6 col-12">
            <div className="product-item">
              {/* product images */}
              <div className="product-thumb">
                <div className="pro-thumb">
                  
                </div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  );
};

export default ProductCards;
