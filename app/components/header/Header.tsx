"use client";
import { useState } from "react";
import SearchBox from "../searchBox/SearchBox";
import { TiThMenu } from "react-icons/ti";
import { TiThMenuOutline } from "react-icons/ti";
import MobileMenu from "../menu/MobileMenu";
import { IoMdRose } from "react-icons/io";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <>
    
    
    <div className="w-screen sticky bg-gray-200 py-4 flex items-center justify-between px-4">
      {/* <HiOutlineShoppingCart size={"26"} className=" text-gray-700" /> */}
      <div className="hidden md:block text-gray-600 font-serif font-bold" >
        Store App
      </div>
      <div className="md:hidden text-gray-600 font-serif font-bold">
        <IoMdRose size={"26"}/>
      </div>

        <SearchBox />

     {/* toggle menu for mobile */}
      <div
        className="relative transition-all duration-75 md:hidden text-gray-700"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      >
        {!showMobileMenu ? (
          <TiThMenu size={"26"} />
        ) : (
          <TiThMenuOutline size={"26"} />
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
