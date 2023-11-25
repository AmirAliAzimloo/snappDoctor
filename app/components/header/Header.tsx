"use client";
import { useState } from "react";
import SearchBox from "../searchBox/SearchBox";
import { TiThMenu } from "react-icons/ti";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TiThMenuOutline } from "react-icons/ti";
import MobileMenu from "../menu/MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <>
    
    
    <div className="w-screen bg-green-500 py-4 flex items-center justify-between px-4">
      <HiOutlineShoppingCart size={"27"} className=" text-gray-700" />

      <div className="hidden md:block">
        <SearchBox />
      </div>

      <div
        className="relative transition-all duration-75 md:hidden text-gray-700"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      >
        {!showMobileMenu ? (
          <TiThMenu size={"27"} />
        ) : (
          <TiThMenuOutline size={"27"} />
        )}
      </div>

      

    </div>


        {
        showMobileMenu && (<MobileMenu/>)
      }

    </>
  );
};

export default Header;
