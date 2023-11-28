"use client"

import Loader from "@/app/components/Loader/Loader";
import Product from "./Product";
import useSWR from "swr";
import Error from "@/app/error"

const ProductList = () => {

    const { data , error } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/categories`)


    
    // if (error) {
    //     return (
    //         <Error/>
    //     );
    //   }

    //   if (!data) {
    //     return (
    //     <Loader/>
    //     );
    //   }

    return ( 
        // <div>
        //   {
        //     data.map((product:any,index:any)=><Product key={index}  />)
        //   }
        // </div>
        <>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        </>
     );
}
 
export default ProductList;