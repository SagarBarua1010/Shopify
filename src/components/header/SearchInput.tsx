"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { getData } from "@/helpers";
import { ProductType } from "../../../type";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      const endpoint = "https://dummyjson.com/products";

      try {
        const data = await getData(endpoint);
        setProducts(data?.products);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products?.filter((item: ProductType) =>
      item?.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        !searchContainerRef.current.contains(e.target)
      ) {
        setIsInputFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchContainerRef}
      className="hidden md:inline-flex flex-1 h-10 relative"
    >
      <input
        type="text"
        placeholder="Search products here..."
        className="w-full h-full border-2 border-themeColor px-4 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
      />
      {search && (
        <RiCloseLine
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-gray-500
         hover:text-red-500 cursor-pointer duration-200"
        ></RiCloseLine>
      )}
      <span
        className="w-10 h-10 bg-themeColor/80 inline-flex items-center justify-center text-white absolute top-0 right-0
        border border-themeColor hover:bg-themeColor duration-200 cursor-pointer"
      >
        <RiSearchLine></RiSearchLine>
      </span>
      {isInputFocused && search && (
        <div className="absolute left-0 top-12 w-full mx-auto h-auto ma-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black">
          {filteredProducts?.length > 0 ? (
            <div>
              {filteredProducts?.map((item: ProductType) => (
                <Link
                  key={item?.id}
                  href={{
                    pathname: `products/${item?.id}`,
                    query: { id: item?.id },
                  }}
                  onClick={() => setSearch("")}
                  className="flex items-center gap-x-2 text-base font-medium hover:bg-inherit/30 px-3 py-1.5"
                >
                  <CiSearch className="text-lg"></CiSearch> {item?.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-10 px-5">
              <p className="text-base">
                Nothing matched with{" "}
                <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                  {search}
                </span>{" "}
                please try again.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
