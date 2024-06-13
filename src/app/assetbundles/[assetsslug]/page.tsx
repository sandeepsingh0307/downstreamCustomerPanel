import ProductDetailPage from "@/components/content/product/ProductDetailPage";
import React from "react";

type props = {
  params: {
    assetsslug: string | number | undefined;
  };
};

const AssetsBundlesPage = () => {
  // const data = getproductdataAPI()
  return (
    <div>
      <ProductDetailPage />
    </div>
  );
};

export default AssetsBundlesPage;
