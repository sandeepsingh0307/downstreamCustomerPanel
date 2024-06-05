import React from "react";
import { productsList } from "../../lib/constant";
import ProductList from "./ProductList";

const Hero = () => {
  return (
    <>
      <ProductList
        currentProductList={productsList}
        heading="Recent Products"
      />
      <ProductList currentProductList={productsList} heading="Top Products" />
    </>
  );
};

export default Hero;
