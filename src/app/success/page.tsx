"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { resetCart } from "@/Redux/shofySlice";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  !sessionId && redirect("/");

  useEffect(() => {
    if (sessionId) {
      dispatch(resetCart());
      toast.success("payment received successfully!");
    }
  }, [sessionId, dispatch]);

  return (
    <Container className="py-10">
      <Title>Success Page</Title>
      <p className="text-base tracking-wide max-w-3xl mt-1">
        Your payment has been successfully processed! Thank you for completing
        your transaction. You should receive a confirmation email or
        notification shortly with all the details of your payment. If you have
        any questions or need further assistance, feel free to reach out to our
        support team. We appreciate your trust and look forward to serving you.
        Keep this confirmation as a reference for your records. Thank you for
        choosing our services
      </p>
      <div className="mt-5 flex items-center gap-x-5">
        <Button href="/" className="rounded-md">
          View Home Page
        </Button>
      </div>
    </Container>
  );
};

export default SuccessPage;
