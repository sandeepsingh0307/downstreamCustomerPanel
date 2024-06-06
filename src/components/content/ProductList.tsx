import React from "react";
import BoxCenter from "../layout/BoxCenter";
import ProductCard from "./product/ProductCard";

type ProductListProps = {
  currentProductList: Array<productItems>;
  heading: string;
};
const ProductList = ({ currentProductList, heading }: ProductListProps) => {
  return (
    <BoxCenter>
      <div className="flex flex-col justify-center items-start">
        <h3 className="pt-2 underline">{heading}</h3>
        <div className="flex flex-wrap my-3 gap-5 justify-center">
          {currentProductList
            .map((item) => {
              return (
                <div key={item.id}>
                  <ProductCard item={item} />
                </div>
              );
            })
            .slice(0, 3)}
        </div>
      </div>
    </BoxCenter>
  );
};

export default ProductList;
