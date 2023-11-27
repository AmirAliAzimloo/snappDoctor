import Image from "next/image";
import 'animate.css';

const SplashScreenBox = () => {
   return (
      <div className=" flex justify-center items-center h-[100vh] ">
         <div className=" flex flex-col gap-4 items-center">
            <div className="  w-[5rem] h-[5rem] relative  animate__animated animate__slow animate__flip">
               <Image src={"/5.jpg"} fill className="object-cover" alt="splash screen" />
            </div>
            <p className=" font-semibold animate__animated animate__slower animate__fadeInUp">Welcome To Store 😉💚</p>
         </div> 
      </div>
   );
}

export default SplashScreenBox;