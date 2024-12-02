import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";

const Sidebar = () => {
  return (
    <div
      className="absolute right-2 bottom-44 border flex flex-col text-2xl border-borderColor bg-white
    rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40"
    >
      <button className="p-2 hover:bg-skyColor/5 hover:text-skyColor duration-200 border-y border-y-borderColor">
        <FiShoppingCart></FiShoppingCart>
      </button>
      <button className="p-2 hover:bg-skyColor/5 hover:text-skyColor duration-200 border-y border-y-borderColor">
        <LuEye></LuEye>
      </button>
      <button className="p-2 hover:bg-skyColor/5 hover:text-skyColor duration-200 border-y border-y-borderColor">
        <MdFavoriteBorder></MdFavoriteBorder>
      </button>
    </div>
  );
};

export default Sidebar;
