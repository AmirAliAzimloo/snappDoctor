"use client";

import Loader from "@/app/components/Loader/Loader";
import ProductCard from "./ProductCard";
import useSWR from "swr";
import Error from "@/app/components/Error/Error";
import { ProductType } from "@/types";
import Paginate from "../Paginate/Paginate";
import { useState } from "react";

interface ProductListProps {
  filterCategory?: string;
  searchKey?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  filterCategory,
  searchKey,
}) => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, isLoading, error } = useSWR(
    `/api/products${filterCategory ? `/${filterCategory}` : ""}${
      searchKey ? `/search/${searchKey}` : ""
    }?page=${pageIndex}`
  );

  if (isLoading) {
    return (
      <div className="w-full" data-testid="loader" >
        <Loader  isLoading={true} />;
      </div>
    ) 
    
  }

  if (error) {
    return (
      <div className="w-full" data-testid="error"  >
        <Error />
      </div>
    );
  }

  if (data) {
    return (
      <section className="w-full md:w-3/4 bg-white rounded-lg shadow-lg p-5">
        <div className="flex justify-center flex-wrap items-center -m-4">
          {data.products.map((product: ProductType, index: number) => (
            <div className="p-4 w-full sm:w-1/2 lg:w-1/3 h-auto " key={index}>
              <ProductCard data={product} />
            </div>
          ))}
        </div>

        <Paginate
          total={data.total}
          setPageIndex={setPageIndex}
          pageIndex={pageIndex}
        />
      </section>
    );
  }
};

export default ProductList;
