import React, { useEffect, useState } from "react";
import Title from "../Title";
import PriceFormat from "../PriceFormat";
import { ProductType } from "../../../type";
import Button from "../Button";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

interface Props {
  cart: ProductType[];
}

const CartSummary = ({ cart }: Props) => {
  const [totalAmt, setTotalAmt] = useState(0);
  const [discountAmt, setDiscountAmt] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    let amt = 0;
    let discount = 0;
    cart?.map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      amt += item?.price * item?.quantity!;
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      discount += ((item?.price * item.quantity!) / 100) * item?.quantity!;
    });
    setTotalAmt(amt);
    setDiscountAmt(discount);
  }, [cart]);
  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        email: session?.user?.email,
      }),
    });
    const checkoutSession = await response?.json();
  };
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <Title>Cart Summary</Title>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Sub Total</Title>
          <PriceFormat amount={totalAmt}></PriceFormat>
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Discount</Title>
          <PriceFormat amount={discountAmt}></PriceFormat>
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Payable Amount</Title>
          <PriceFormat
            amount={totalAmt - discountAmt}
            className="text-lg font-bold"
          ></PriceFormat>
        </div>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartSummary;
