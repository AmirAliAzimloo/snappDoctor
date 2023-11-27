

import { BsSearch } from "react-icons/bs";

export default function SearchBox() {
  return (
   <div className=" w-full sm:max-w-sm flex justify-center items-center relative shadow-sm " >
    
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
    "
    placeholder="Search ..."
    />
  

    <div className="
    absolute
    text-gray-600
    right-2
    " >
    <BsSearch  size={"20"}/>
    </div>

   </div>
  )
}
