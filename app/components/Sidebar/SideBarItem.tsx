import { HiArrowSmRight } from "react-icons/hi";

interface SideBarItemProps {
    category:string
}


const SideBarItem:React.FC<SideBarItemProps> =({category}) =>{
  return (
   

<div
      className="
    
    flex
    items-center
    pl-1
    sm:pl-8
    space-x-4
    text-gray-400

    py-4
    border-b-2
    border-gray-200
    cursor-pointer
    hover:bg-gray-50
    transition-all
    duration-150
    hover:text-gray-500
    "
    >
      <span
        className="
        block

        "
      >
       {category}
      </span>

      <div className=" hidden sm:block  ">
        <HiArrowSmRight />
      </div>
    </div>

  
  );
}

export default SideBarItem;