"use client"

import useSWR from "swr";
import SideBarItem from "./SideBarItem";

export default function Sidebar() {

    // const fetcher = async (url: string) => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    //   };

      const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/categories`);


      if (error) {
        return <div>Error fetching data</div>;
      }

      if (!data) {
        return <div>Loading...</div>;
      }


      console.log(data,"fkdsjkds")
      


  return (
    <div
      className="
      w-24
   sm:w-52
   md:w-60
   lg:w-80
    
     fixed 

     top-[70px]

     h-screen  
     transition-all
     duration-75 
     overflow-x-hidden
     overflow-y-scroll
     scrollbar-none 


  
    
    border-r-2
    border-gray-200
    shadow-md

     "
    >
        {
            data.map((category:string,index:number)=>
                
        <SideBarItem category={category} key={index} />
                
                )
        }

    </div>
  );
}
