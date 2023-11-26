"use client"
import { usePathname} from "next/navigation";
import { useState } from "react";
import SplashScreenBox from "@/app/components/splash-screen-box";

const SplashScreenProvider = ({children}) => {
   const pathname=usePathname();

   const isHome=pathname==="/";

   const [isLoading,setisLoading]=useState(true);
   
   setTimeout(()=>{setisLoading(false)},2500);


   return (
      <div>
         {
            (isLoading && isHome)
            ?<SplashScreenBox/>
            :children
         }
      </div>
   );
}

export default SplashScreenProvider;