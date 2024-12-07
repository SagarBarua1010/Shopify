"use client";
import { useSelector } from "react-redux";
import { ProductType, StateType } from "../../../type";
import Link from "next/link";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shofy);
  return (
    <div>
      {cart?.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
            <section className="lg:col-span-7">
              <div className="divide-y divide-gray-200 border-b border-r border-gray-200">
                {cart?.map((product: ProductType) => (
                  <CartProduct key={product?.id} product={product} />
                ))}
              </div>
            </section>
            <CartSummary cart={cart}></CartSummary>
          </div>
        </>
      ) : (
        <div
          className="bg-white h-96 my-10 flex flex-col gap-4 items-center justify-center py-5
        rounded-lg border border-gray-200 drop-shadow-2xl"
        >
          <h1 className="text-3xl font-bold translate-tight text-gray-900 sm:text-4xl">
            shopping Cart
          </h1>
          <p className="text-base max-w-[700px] text-center text-gray-600 tracking-wide leading-6">
            Your cart is empty. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur doloribus laudantium, fuga illum
            voluptatem commodi quasi debitis aperiam obcaecati sit tenetur
            eligendi recusandae quisquam, cupiditate nam ex beatae placeat
            labore provident dolorum deleniti voluptates atque. Repellat
            cupiditate consequatur, quas dolore perspiciatis nihil mollitia
            atque consequuntur corporis id nostrum omnis amet?
          </p>
          <Link
            className="bg-skyColor/90 text-gray-100 px-8 py-4 rounded-md
          hover:bg-skyColor duration-200 uppercase text-sm font-s tracking-wide"
            href="/"
          >
            go to shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
