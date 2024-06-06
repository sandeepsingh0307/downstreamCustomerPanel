"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type ProductCardSideImagesProps = {
  ImagesList: Array<ProductImages>;
};
const ProductCardSideImages = ({ ImagesList }: ProductCardSideImagesProps) => {
  const sideImageDiv = useRef<HTMLDivElement | null>(null);
  const [currentProductImage, setCurrentProductImage] = useState<ProductImages>(
    ImagesList[0]
  );

  const searchImageByID = (id: number) => {
    const newArr = ImagesList.filter((image) => image.id === id);
    if (!newArr.length) return ImagesList[0];
    return newArr[0];
  };

  const iconImagesClicked = (id: number) => {
    const product = searchImageByID(id);
    setCurrentProductImage(product);
  };

  useEffect(() => {
    const elem = sideImageDiv.current as HTMLDivElement;
    // console.log(typeof getComputedStyle(elem).height);
    // console.log(parseInt(getComputedStyle(elem).height, 10));

    if (parseInt(getComputedStyle(elem).height, 10) >= 450) {
      elem.classList.add("scrollY");
      elem.classList.remove("scrollX");
    }
    if (parseInt(getComputedStyle(elem).width, 10) >= 300) {
      elem.classList.add("scrollX");
      elem.classList.remove("scrollY");
    }

    return () => {
      elem.classList.remove("scrollX");
      elem.classList.remove("scrollY");
    };
  }, []);

  return (
    <div className="flex justify-start flex-col-reverse md:flex-row gap-5">
      <div
        className="flex flex-row md:flex-col justify-start gap-3 rounded-md"
        ref={sideImageDiv}
      >
        {ImagesList.map((image) => {
          return (
            <div
              key={image.id}
              className="cursor-pointer"
              onClick={(e) => {
                iconImagesClicked(image.id);
              }}
              onMouseEnter={(e) => {
                iconImagesClicked(image.id);
              }}
            >
              <Image
                alt={image.alt}
                src={image.url}
                width={100}
                height={100}
                className="object-cover w-full rounded-lg -top-5"
                style={{ aspectRatio: "1", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>

      <Link href={currentProductImage.href ? currentProductImage.href : "#"}>
        <div className="overflow-hidden">
          <Image
            src={currentProductImage.url}
            width={600}
            height={600}
            alt={currentProductImage.alt}
            loading="lazy"
            className="object-cover w-full rounded-lg"
            style={{ aspectRatio: "1", objectFit: "cover" }}
            onMouseEnter={(e) => {
              // console.log(e.currentTarget);
              const target = e.currentTarget as HTMLDivElement;
              target.style.scale = "1.2";
            }}
            onMouseLeave={(e) => {
              // console.log(e.currentTarget);
              const target = e.currentTarget as HTMLDivElement;
              target.style.scale = "1";
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductCardSideImages;
