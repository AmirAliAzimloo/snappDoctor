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