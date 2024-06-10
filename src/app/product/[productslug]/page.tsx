import ProductDetailPage from "@/components/content/product/ProductDetailPage";
import React from "react";

type props = {
  params: {
    productslug: string | number | undefined;
  };
};

const ProductPage = () => {
  // const data = getproductdataAPI()
  return (
    <div>
      <ProductDetailPage />
    </div>
  );
};

export default ProductPage;
