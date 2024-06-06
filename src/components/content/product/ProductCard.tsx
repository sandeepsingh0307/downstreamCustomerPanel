import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import Image from "next/image";

const dummyImage =
  "https://raw.githubusercontent.com/vivekcsein/githost/main/images/coding/cardimages/card_bgimage02.jpg";

type ProductCardProps = {
  item: {
    id: number;
    name: string;
    desc: string;
    currentbid: number;
    img?: string;
  };
};
const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Card
      key="1"
      className=" border-gradient rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200 relative"
    >
      <Image
        alt="Profile picture"
        src={item.img ? item.img : dummyImage}
        className="object-cover w-full -top-5"
        height="160"
        style={{ aspectRatio: "320/200", objectFit: "cover" }}
        width="320"
      />
      {/* <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div> */}
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold text-foreground hover:text-special hover:cursor-default transition-all duration-200">
          {item.name}
        </h2>
        <p className="mt-2 text-foreground hover:text-special hover:cursor-default transition-all duration-200">
          {item.desc}
        </p>
        <div className="flex items-center justify-evenly gap-0 mt-2">
          current bid is
          <h3 className="text-special">{`  ${item.currentbid}`}$</h3>
        </div>
        <div className="flex mt-4 space-x-2">
          <Button
            className="w-full bg-special hover:bg-gray-700 hover:text-white transition-all duration-200"
            size="sm"
          >
            place your bid
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
