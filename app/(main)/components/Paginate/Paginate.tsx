"use client"

import { ProductType } from "@/types";

interface PaginateProps {
total: number;
  pageIndex:number;
  setPageIndex:(value: number)=>void;
}

const Paginate: React.FC<PaginateProps> = ({ total , setPageIndex , pageIndex }) => {
  return (
    <>
      <ul className="flex items-center justify-center my-4 space-x-2 " >
        {Array.from({ length: Math.ceil(total / 10) }).map((_, index) => (
          <li
          className={`
          
          bg-gray-200
          cursor-pointer
          py-2
          px-4 
          rounded-sm
          shadow-md
          hover:text-gray-200
          hover:bg-gray-600
          transition-all
          duration-150
          ${
            pageIndex == (index + 1) ? "text-gray-200 bg-gray-600" : ""
          }
          `}
          onClick={()=>setPageIndex(index + 1)} 
          key={index + 1}>
                {index + 1}
            </li>
        ))}
      </ul>
    </>
  );
};

export default Paginate;
