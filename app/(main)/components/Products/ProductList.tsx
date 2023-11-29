"use client"

import Loader from "@/app/components/Loader/Loader";
import Product from "./Product";
import useSWR from "swr";
import Error from "@/app/error"
import { ProductType } from "@/types";

const ProductList = () => {

    const { data , error } = useSWR(`/api/products`)


    
    if (error) {
        return (
            <Error/>
        );
      }

      if (!data) {
        return (
        <Loader/>
        );
      }

    return ( 
      <>
        <section className=" my-4 grid  grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  " >
          {
            data.slice(0,10).map((product:ProductType,index:number)=><Product product={product} key={index}  />)
          }
        </section>

<ul >
{
Array.from({ length: Math.ceil(data.length / 10) }).map(
  (_, index) => (
    <li
      key={index + 1}
    >
      <a href="#" className="">
        {index + 1}
      </a>
    </li>
  )
)}
</ul>

</>
     );
}
 
export default ProductList;







// import React, { useEffect, useState } from "react";
// import db from "./../../data/db.json";
// import Home from "@/components/modules/Home";

// function index() {
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("-1");
//   const [homes, setHomes] = useState([...db.homes]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const newHomes = db.homes.filter((home) => home.title.includes(search));
//     setHomes(newHomes);
//   }, [search]);

//   useEffect(() => {
//     switch (sort) {
//       case "price": {
//         const newHomes = [...homes].sort((a, b) => a.price - b.price);
//         setHomes(newHomes);
//         break;
//       }
//       case "room": {
//         const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
//         setHomes(newHomes);
//         break;
//       }
//       case "meterage": {
//         const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
//         setHomes(newHomes);
//         break;
//       }
//       default: {
//         setHomes([...db.homes]);
//       }
//     }
//   }, [sort]);

//   const paginateHandler = (event:React.MouseEvent<HTMLLIElement, MouseEvent>, page:number) => {
//     event.preventDefault();

//     const endIndex = 3 * page;
//     const startIndex = endIndex - 3;

//     const paginatedHomes = db.homes.slice(startIndex, endIndex);
//     setHomes(paginatedHomes);

//     // Codes
//   };

//   return (
//     <div className="home-section" id="houses">
//       <div className="home-filter-search">
//         <div className="home-filter">
//           <select defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
//             <option value="-1">انتخاب کنید</option>
//             <option value="price">بر اساس قیمت</option>
//             <option value="room">بر اساس تعداد اتاق</option>
//             <option value="meterage">بر اساس اندازه</option>
//           </select>
//         </div>
//         <div className="home-search">
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="جستجو کنید"
//           />
//         </div>
//       </div>

//       <div className="homes">
//         {homes.slice(0, 3).map((home) => (
//           <Home key={home.id} {...home} />
//         ))}
//       </div>

//       <ul className="pagination__list">
//         {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
//           (item, index) => (
//             <li
//               key={index + 1}
//               className="pagination__item"
//               onClick={(event) => paginateHandler(event, index + 1)}
//             >
//               <a href="#" className="">
//                 {index + 1}
//               </a>
//             </li>
//           )
//         )}
//       </ul>
//     </div>
//   );
// }

// export default index;
