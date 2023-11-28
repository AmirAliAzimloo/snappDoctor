"use client"

import { FaFilter } from "react-icons/fa";
import { useState } from "react"
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { TiThMenu } from "react-icons/ti";
import { TiThMenuOutline } from "react-icons/ti";



const MobileMenu = () => {

  const [showToggleMenu,setShowToggleMenu] = useState<boolean>(false)

  return (
    <>
    
    {
      showToggleMenu && (<Sidebar  showToggleMenu={showToggleMenu} />)
    }



    <div
    className="
    pr-4
    block
    sm:hidden
    text-gray-400
    "
    onClick={()=>setShowToggleMenu(prev=>!prev)}  

    >
        {
          !showToggleMenu ?
          (<TiThMenu size={24} />)
          :
          (<TiThMenuOutline size={24}  />
          )
        }
        
      
    </div>


    </>
    
  );
};

export default MobileMenu;
