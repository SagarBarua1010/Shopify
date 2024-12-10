import Button from "@/components/Button";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

const CancelPage = () => {
  return (
    <Container className="py-10">
      <Title>your payment has been cancelled</Title>
      <p className="text-base tracking-wide max-w-3xl mt-1">
        Your payment has been cancelled. This could be due to various reasons
        such as insufficient funds, incorrect payment details, or a declined
        transaction by your bank. Please review your payment information and
        ensure all details are correct. If the issue persists, consider
        contacting your bank or payment provider for assistance. You can also
        try resubmitting the payment or using an alternative payment method.
        We’re here to help if you need further support or have any questions.
      </p>
      <div className="mt-5 flex items-center gap-x-5">
        <Button href="/" className="rounded-md">
          Continue Shopping
        </Button>
        <Button href="/cart" className="rounded-md">
          View Cart
        </Button>
      </div>
    </Container>
  );
};

export default CancelPage;
