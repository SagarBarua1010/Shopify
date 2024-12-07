import Container from "@/components/Container";
import ProductImages from "@/components/ProductImages";
import { getData } from "@/helpers";
import React from "react";
import { ProductType } from "../../../../type";
import ProductPrice from "@/components/ProductPrice";
import { MdStar } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import PriceFormat from "@/components/PriceFormat";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { paymentImage } from "@/app/assets";

interface Props {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product: ProductType = await getData(endpoint);

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <ProductImages images={product?.images}></ProductImages>
      {/* Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{product?.title}</h2>
        <div className="flex items-center justify-between gap-5">
          <ProductPrice product={product}></ProductPrice>

          <div className="flex items-center gap-2">
            <div className="text-base text-lightText items-center flex ">
              {Array?.from({ length: 5 })?.map((_, index) => {
                const filled = index + 1 <= Math.floor(product?.rating);
                const halfFilled =
                  index + 1 > Math.floor(product?.rating) &&
                  index < Math.ceil(product?.rating);
                return (
                  <MdStar
                    key={index}
                    className={`${
                      filled
                        ? "text-[#fa8900]"
                        : halfFilled
                        ? "text-[#40f13a]"
                        : "text-lightText"
                    }`}
                  ></MdStar>
                );
              })}
            </div>
            <p className="text-base font-semibold">{`(${product?.rating?.toFixed(
              1
            )}) reviews`}</p>
          </div>
        </div>
        <p className="flex items-center">
          <FaRegEye className="mr-1"></FaRegEye>{" "}
          <samp className="font-semibold mr-1">250+</samp> peoples are viewing
          this right now
        </p>
        <p>
          You are saving{" "}
          <PriceFormat
            amount={(product?.price * product?.discountPercentage) / 100}
            className="text-base font-semibold text-orange-700"
          ></PriceFormat>{" "}
          upon purchase
        </p>
        <div>
          <p className="text-sm tracking-wide">{product?.description}</p>
          <p className="text-base">{product?.warrantyInformation}</p>
        </div>
        <p>
          Brand: <span className="font-medium ">{product?.brand}</span>
        </p>
        <p>
          Category:{" "}
          <span className="font-medium capitalize">{product?.category}</span>
        </p>
        <p>
          Tags:{" "}
          {product?.tags?.map((item, index) => (
            <span key={index} className="font-medium capitalize">
              {item}
              {index < product?.tags?.length - 1 && ", "}
            </span>
          ))}
        </p>
        <AddToCartButton
          product={product}
          className="rounded-md uppercase font-semibold"
        ></AddToCartButton>
        <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
          <Image
            src={paymentImage}
            alt="payment"
            className="w-auto object-cover"
          ></Image>
          <p className="font-semibold">Guaranteed safe & secure checkout</p>
        </div>
      </div>
      {/* Reviews */}
      <div className="p-10 bg-[#f7f7f7] md:col-span-2 flex items-center gap-10">
        {product?.reviews.map((item) => (
          <div
            key={item?.reviewerName}
            className="bg-white/80 p-5 border-[1px] border-amazonOrangeDark/50 rounded-md 
              hover:border-amazonOrangeDark hover:bg-white duration-200 flex flex-col gap-1"
          >
            <p className="text-base font-semibold">{item?.comment}</p>
            <div className="text-xs">
              <p className="font-semibold">{item.reviewerName}</p>
              <p className="">{item?.reviewerEmail}</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                {Array?.from({ length: 5 })?.map((_, index) => (
                  <MdStar
                    key={index}
                    className={`${
                      index < item?.rating
                        ? "text-yellow-500"
                        : "text-lightText"
                    }`}
                  ></MdStar>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SingleProductPage;
