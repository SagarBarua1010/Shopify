import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";


const linksData = [
  { icon: <FaGithub></FaGithub>, href: "https://github.com/SagarBarua1010" },
  {
    icon: <FaLinkedin></FaLinkedin>,
    href: "https://www.linkedin.com/in/sagarbarua0/",
  },
  {
    icon: <FaEnvelope></FaEnvelope>,
    href: "https://mail.google.com/mail/u/0/#inbox",
  },
];

const SocialLinks = ({className,iconStyle}:{className?:string;iconStyle?:string;})=> {
  return (
    <div className={twMerge("text-xl py-2 text-white/50 flex items-center gap-x-2",className)}>
      {linksData?.map((item, index) => (
        <Link
          key={index}
          href={item?.href}
          target="blank"
          className={twMerge("border border-white/20 inline-flex p-2 rounded-full hover:text-skyColor duration-300cursor-pointer",iconStyle)}
        >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
