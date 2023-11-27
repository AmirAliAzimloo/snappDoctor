import SearchBox from "./SearchBox";

export default function Header() {
  return (
   <nav className="w-full  p-4 flex items-center justify-center sm:justify-between  border-b-2 border-gray-200 shadow-sm " >

   <span className=" hidden sm:block  text-gray-600 font-extrabold" >
    Store App
   </span>

  
   <SearchBox />

   </nav>
  )
}
