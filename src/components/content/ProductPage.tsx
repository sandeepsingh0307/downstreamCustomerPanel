import React from "react";

import { productsList } from "../../lib/constant";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import HamburgerIcon from "@/components/layout/HamburgerIcon";
import Sidebar_content from "@/components/content/sidebar/Sidebar_content";
import ProductList from "@/components/content/ProductList";

const ProductPage = () => {
  return (
    <>
      <div className="lg:hidden">
        <Sheet>
          <div className="flex w-full px-10 py-2">
            <h3 className="pt-2 w-full underline lg:hidden ">
              All Products Now
            </h3>
            <HamburgerIcon />
          </div>
          <SheetContent side="right">
            <Sidebar_content />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex relative">
        <div className="hidden min-h-screen lg:flex fixed top-10 overflow-auto overflow-y-scroll  left-0 w-[300px] bg-special  ">
          <Sidebar_content />
        </div>
        <div className="flex flex-col  w-full px-10 py-2 pl-[350px]">
          <h3 className="pt-2 w-full underline hidden lg:block ">
            All Products Now
          </h3>
          <ProductList
            currentProductList={productsList}
            heading={"All Products"}
            // productCount={3}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
