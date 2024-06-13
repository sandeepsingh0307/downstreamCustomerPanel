import React from "react";
import { productsList } from "../../lib/constant";
import ProductList from "./ProductList";

const Hero = () => {
  return (
    <>
      <ProductList
        currentProductList={productsList}
        heading="Recent Products"
        productCount={3}
      />
      <ProductList
        currentProductList={productsList}
        heading="Top Products"
        productCount={3}
      />
    </>
  );
};

export default Hero;
