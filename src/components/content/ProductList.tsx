import React from "react";
import BoxCenter from "../layout/BoxCenter";
import ProductCard from "./product/ProductCard";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import MenuIcon from "../layout/MenuIcon";
import HamburgerIcon from "../layout/HamburgerIcon";

type ProductListProps = {
  currentProductList: Array<productItems>;
  heading?: string;
  productCount?: number;
};
const ProductList = ({
  currentProductList,
  productCount,
}: ProductListProps) => {
  return (
    <BoxCenter>
      <div className="flex flex-col justify-center items-start ">
        <div className="flex flex-wrap my-3 gap-5 justify-center">
          {currentProductList
            .map((item) => {
              return (
                <div key={item.id}>
                  <ProductCard item={item} />
                </div>
              );
            })
            .slice(0, productCount ? productCount : currentProductList.length)}
        </div>
      </div>
    </BoxCenter>
  );
};

export default ProductList;
