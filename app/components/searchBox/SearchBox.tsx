"use client";

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const SearchBox = () => {
  const [search, setSearch] = useState("");


  return (
    <div className="  max-[355px]:w-44 bg-white flex items-center justify-center relative py-2 px-1 rounded-full">
      <input
        type="text"
        placeholder="Search.."
        className="
           border-none
           outline-none
           text-gray-600
           pr-8
           pl-2
           max-[355px]:w-40
           "
        onChange={(e) => setSearch(e.target.value)}
      />

      <div
        className=" 
           cursor-pointer
            text-gray-600
            absolute
            right-0
            -translate-x-1/2
            mr-1
            "
      >
        {!search ? <BsSearch size={"18"} /> : <BsArrowLeft  size={"18"}/>}
      </div>
    </div>
  );
};

export default SearchBox;
