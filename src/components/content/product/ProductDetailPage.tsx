import React from "react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { dummyImageList, dummyProductdetail } from "../../../lib/constant";
import ProductCardSideImages from "./ProductCardSideImages";

type ProductDetailPageProps = {
  product?: {
    id: number;
    name: string;
    details: string;
    currentprice: number;
    fullprice: number;
    currentrating: number;
    img: Array<string>;
    totalRating: number;
    desc: string;
  };
};
export const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const {
    id,
    name,
    details,
    currentprice,
    fullprice,
    currentrating,
    totalRating,
    img,
    desc,
  } = product ? product : dummyProductdetail;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <main className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2">
          <div className="mb-4">
            <ProductCardSideImages ImagesList={dummyImageList} />
          </div>
          <div className="flex space-x-2">
            <Badge variant="secondary">DISPLAY</Badge>
            <Badge variant="default">SALE</Badge>
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <h3 className="text-xl font-semibold">{details}</h3>
            <div className="flex items-center">
              <p className="text-yellow-400">{currentrating}</p>
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <p className="text-sm text-gray-500 ml-2">
                {`${totalRating} Ratings`}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-baseline space-x-2">
              <p className="text-3xl font-bold text-special">${currentprice}</p>
              <p className="text-lg text-gray-500 line-through">${fullprice}</p>
            </div>
            <p className="text-sm text-gray-500">Incl. Vat plus shipping</p>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-5 h-5 text-gray-500" />
              <p className="text-sm text-gray-500">2-4 Day Shipping</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-special">Bid Now</Button>
            <Button variant="secondary">Checkout Now</Button>
          </div>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* <header className="flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold">CompanyName</h1>
        <nav className="flex space-x-4">
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Asset Bundles
          </Link>
        </nav>
        <Button variant="ghost">
          <ShoppingCartIcon className="w-6 h-6" />
        </Button>
      </header> */
