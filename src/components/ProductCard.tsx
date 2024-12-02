import React from "react";
import { ProductType } from "../../type";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div
      className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md
    group overflow-hidden relative"
    >
      <Link href={"/products"}>
        <Image
          src={product?.images[0]}
          alt="product-image"
          width={500}
          height={500}
          priority={true}
          className="w-full h-64 object-contain hover:scale-110 duration-300"
        ></Image>
        <p className="absolute top-2 right-2 bg-orange-500 text-wite py-1 px-2 text-xs rounded-lg ">
          {product?.discountPercentage}%
        </p>
      </Link>
      <Sidebar></Sidebar>
      <div className="border-t border-t-borderColor py-2 px-4 flex flex-col justify-between h-40">
        <div>
          <p className="text-sm font-medium text-lightText capitalize">
            {product?.category}
          </p>
          <h2 className="font-semibold text-base line-clamp-2">
            {product?.title}
          </h2>
          <ProductPrice product={product}></ProductPrice>
        </div>
        <AddToCartButton></AddToCartButton>
      </div>
    </div>
  );
};

export default ProductCard;
