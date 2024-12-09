import React from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/app/assets";
import SearchInput from "./SearchInput";
import Link from "next/link";
import HeaderIcons from "./HeaderIcons";
import SignInButton from "../SignInButton";

const MiddleHeader = () => {
  return (
    <div className="border-b-[1px] border-b-gray-400">
      <Container className=" py-5 flex items-center gap-4  md:gap-4 lg:20  justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" className="w-7" priority></Image>
            <p className="text-[20px] font-bold text-[#f71815] mt-1">
              Shopify...
            </p>
          </div>
        </Link>
        <SearchInput></SearchInput>
        <div className="hidden md:inline-flex items-center gap-3">
          <SignInButton></SignInButton>

          <HeaderIcons></HeaderIcons>
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
