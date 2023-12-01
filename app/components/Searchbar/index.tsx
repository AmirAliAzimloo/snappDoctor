"use client"

import axios from "@/app/libs/axios";
// import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  
  const [search,setSearch] = useState("")
  const router = useRouter();




  
  return (
   <div className=" w-full  sm:max-w-sm flex justify-center items-center relative shadow-md " >
    
    <input 
    type="text"
    className="
    block
    rounded-sm 
    py-2 
    pr-8
    pl-4
    text-sm 
    border-none 
    outline-none
    w-full
    font-serif
    text-gray-500
    "
    placeholder="Search ..."
    value={search}
    onChange={e=>setSearch(e.target.value)}
    onKeyDown={(e)=>{
      if(e.key === 'Enter' && !!search.trim()) {
        router.push(`/search/${search}`)        
        setSearch("")
    }
    }}
    />
    <Link href={`/search/${search}`} className="
    absolute
    text-gray-600
    right-2
    " >
      <div
      onClick={()=>setSearch("")}
      >

    <BsSearch 
    
    className={`
    cursor-pointer
    ${
      search.trim().length ? "text-sky-600 font-extrabold block" : "text-gray-500 disabled"
    }
    `}

    size={"20"}/>
      </div>
    </Link >

   </div>
  )
}


export default Searchbar;