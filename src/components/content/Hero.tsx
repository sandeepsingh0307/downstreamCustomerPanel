import React from "react";
import { productsList } from "../../lib/constant";
import ProductList from "./ProductList";
import ProductDetailPage from "./product/ProductDetailPage";

const Hero = () => {
  return (
    <>
      <ProductList
        currentProductList={productsList}
        heading="Recent Products"
      />
      <ProductList currentProductList={productsList} heading="Top Products" />
      <ProductDetailPage />
    </>
  );
};

export default Hero;
