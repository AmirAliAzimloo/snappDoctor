import { Product } from "@/app/types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="w-screen pt-2 px-2 h-screen">
      <div
        className="
        h-screen
           overflow-x-hidden
           overflow-y-scroll
            scrollbar-thin 
           scrollbar-thumb-gray-300
              scrollbar-thumb-rounded-xl  
             flex
          items-center 
             justify-center
             flex-wrap
             "
      >
        {products.map((product) => (
          <ProductItem key={product.id} name={product.name} id={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
