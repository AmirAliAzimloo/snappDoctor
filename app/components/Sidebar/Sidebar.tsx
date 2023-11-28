"use client";

import useSWR from "swr";
import SideBarItem from "./SideBarItem";
import Loader from "../Loader/Loader";
import Error from "@/app/error";

interface SidebarProps {
  showToggleMenu?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ showToggleMenu = false }) => {
  const { data, error } = useSWR(`/api/categories`);

  if (error) {
    return <Error />;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <div
      className={`
      w-full h-screen  overflow-hidden 
      sm:block
   sm:w-52
   md:w-60
   lg:w-80
     fixed 
    bg-gray-400
     top-[70px]

     transition-all
     duration-75 
     overflow-x-hidden
     overflow-y-scroll
     scrollbar-none 


  
    
    border-r-2
  border-gray-200
    shadow-md

    ${showToggleMenu ? "block" : "hidden"}

     `}
    >
      {data.map((category: string, index: number) =>
        data.length == index + 1 ? (
          <div key={index} className="mb-32">
            <SideBarItem category={category} key={index} />
          </div>
        ) : (
          <SideBarItem category={category} key={index} />
        )
      )}
    </div>
  );
};

export default Sidebar;
