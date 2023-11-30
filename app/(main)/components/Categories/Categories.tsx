"use client"

import useSWR from "swr"
import Loader from "@/app/components/Loader/Loader";
import Error from "@/app/components/Error/Error";
import Link from "next/link";

const Categories = () => {
  
    const { data , error , isLoading } = useSWR(`/api/categories`)

    if(isLoading){
        return ( 
            <Loader isLoading={true} />
         )
    }

    if(error){
        return (
            <Error/>
        )
    }

    if(!!data){

        return (
            <>
          <aside className="hidden md:block w-1/4 py-5 px-3 bg-white rounded-lg shadow-lg sticky top-[calc(80px+1rem)] bottom-0 ">
            <div className="flex flex-col items-start justify-start ">
              <h1 className="text-2xl">filter</h1>
              <h3 className="text-lg">categories:</h3>
              <ul className="w-1/2 gap-2 pl-4 flex flex-col mt-4 ">

                {data.map((category:string,index:number) => (
                    <Link href={`/products/${category}`} key={index} className="w-full rounded-lg  ">
                      {category}
                    </Link>
                  ))}
      
              </ul>
            </div>
          </aside>
    
    
            <aside className="w-full px-5 py-2 md:hidden flex justify-start items-center gap-4 ">
    <div className="inline">filter</div>
    <div className="flex-1 overflow-x-scroll w-full">
      <div className="w-fit flex justify-start items-center gap-3">
        {[1, 2, 3, 4, 5].map((it) => (
          <div
            className="bg-neutral-400/60 h-6 rounded-lg animate-pulse w-[85px]"
            key={it}
          ></div>
        ))}
      </div>
    </div>
            </aside>
            </>
    
        );

    }

   
  };
  
  export default Categories;
  