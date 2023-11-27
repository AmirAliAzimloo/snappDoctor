export default function FooterBox() {
  return (
    <div className="w-full text-center flex flex-col">

        <div className=" px-4 text-start " >

        <span
        className="
    block
    text-gray-600
    pt-4
    pb-1
    border-b-2
    border-gray-300
    font-bold
    "
      >
        Section Title
      </span>


      <ul className=" text-gray-400 ">
        <li className="py-1" >
          <span className="hover:text-gray-300 cursor-pointer font-serif ">Home</span>
        </li>
        <li className="py-1" >
          <span className="hover:text-gray-300 cursor-pointer font-serif ">About Us</span>
        </li>
        <li className="py-1" >
          <span className="hover:text-gray-300 cursor-pointer font-serif ">Help</span>
        </li>
        <li className="py-1" >
          <span className="hover:text-gray-300 cursor-pointer font-serif ">Account</span>
          
        </li>
      </ul>

        </div>
     
    </div>
  );
}
