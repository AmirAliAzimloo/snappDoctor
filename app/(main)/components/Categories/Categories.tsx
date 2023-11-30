"use client";

import useSWR from "swr";
import Loader from "@/app/components/Loader/Loader";
import Error from "@/app/components/Error/Error";
import Link from "next/link";
import { HiChevronDoubleRight } from "react-icons/hi";
import { BiSolidCategory } from "react-icons/bi";
import { useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";

const Categories = () => {
  const { data, error, isLoading } = useSWR(`/api/categories`);
  const [filterskind,setFiltersKind] = useState<string>("")

  if (isLoading) {
    return <Loader isLoading={true} />;
  }

  if (error) {
    return <Error />;
  }

  if (!!data) {
    return (
      <>
        <aside className={
          `
          ${
            filterskind !== "categories" ?
            "hidden md:block w-1/4 py-5 px-3 bg-white rounded-lg shadow-lg sticky top-[calc(80px+1rem)] bottom-0 "
            :
            "w-screen h-screen fixed left-0 z-50 p-4 bg-gray-100 top-0 transition-all duration-150"
          }
          `
        }
        >
          <div className="flex flex-col items-start justify-start ">

            <div className={
              `${
                filterskind !== "" ? "flex border-b-2 items-center justify-between w-full"
                : "w-full border-b-2 "
              }`
            } >
            <h1 className="text-2xl font-bold text-neutral-600  w-full ">filters</h1>
            {
              filterskind !== "" && <div 
              onClick={()=>setFiltersKind("")}
              className="text-2xl font-bold text-neutral-600  " >
                <TiArrowBackOutline size="28" />
              </div>
            }
            </div>
            
            

           <div className="flex items-center justify-between w-full " >
           <h3 className="text-lg font-bold text-neutral-600   py-2 ">categories</h3>
            <BiSolidCategory size="22" className="text-neutral-600" />
           </div>

            <ul className="w-full gap-2 pl-4 flex flex-col mt-4 ">
              {data.map((category: string, index: number) => (
                  <Link
                    href={`/products/${category}`}
                    key={index}
                    className="w-full rounded-lg shadow-md bg-neutral-100 hover:bg-neutral-200
                    transition-all duration-100
                    flex items-center justify-between px-4 py-2  "
                    onClick={()=>setFiltersKind("")}
                  >
                    {category}
                    <div className="text-neutral-600" >
                   <HiChevronDoubleRight />
                    </div>
                  </Link>
              ))}
            </ul>
          </div>
        </aside>

        <aside className="w-full px-5 md:hidden flex justify-start items-center gap-4 ">
          <div className="inline font-bold  text-neutral-600 ">filters : </div>
          
          <div className="flex-1 overflow-x-scroll w-full">
            <div className="w-fit flex justify-start items-center gap-3">
                <div
                 className="   bg-neutral-100 rounded-lg  shadow-sm  animate-pulse py-1 px-4    "
                 onClick={()=>setFiltersKind("categories")}
                >
                Categories
                </div>

            </div>
          </div>
        </aside>
      </>
    );
  }
};

export default Categories;
