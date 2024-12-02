import React from "react";
import Container from "./Container";
import Link from "next/link";
import { logo } from "@/app/assets";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Title from "./Title";
import { navigation } from "@/constants";
import { GoDotFill } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";


const Footer = () => {
  return (
    <div className="bg-lightBg py-10 lg:py-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        <div className="flex flex-col gap-y-5">
          <Link href={"/"}>
            <div className="flex items-center">
              <Image src={logo} alt="logo" className="w-7" priority></Image>
              <p className="text-[20px] font-bold text-[#f71815] mt-1">
                Shopify...
              </p>
            </div>
            <p className="font-bold">Full Stack Web Developer (MERN)</p>
            <SocialLinks iconStyle="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg 
            hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md">
            </SocialLinks>
          </Link>
        </div>
        <div>
          <Title>My Account</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item)=>(
              <Link 
              key={item?.title}
              href={item?.href}
              className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
              >
                <GoDotFill size={10}></GoDotFill>
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Talk to Us</Title>
          <div className="mt-3">
            <div>
              <p className="text-sm">Got Questions? Call us</p>
              <Title>+880 1516178083</Title>
            </div>
            <div className="mt-3">
            <p className="text-base flex items-center gap-x-3 text-gray-600"><BsEnvelopeAt></BsEnvelopeAt>sagarbarua1010@gmail.com</p>
            <p className="text-base flex items-center gap-x-3 text-gray-600"><GrLocation></GrLocation> Chittorgarh,Bangladesh</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
