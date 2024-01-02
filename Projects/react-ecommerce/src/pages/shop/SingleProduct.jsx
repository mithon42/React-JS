import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const {id} = useParams()
  console.log(id);

  return <div>SingleProduct</div>;
};

export default SingleProduct;
