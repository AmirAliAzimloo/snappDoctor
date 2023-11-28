import { ProductType } from "@/types";
import Image from "next/image";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-all duration-150">
      <div>
        <Image
          src="/5.jpg"
          width="572"
          height="572"
          alt={product.description}
          className="rounded-t-sm"
        />
      </div>

      <div className="p-2 " >
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-neutral-900 mt-1 block">
            {product.title}
          </span>

          <span className="text-sm font-semibold text-neutral-900 mt-1 block">
            {`$${product.price}`}
          </span>
        </div>

        <div className="mt-1 text-sm text-neutral-500">{product.category}</div>
      </div>
    </div>
  );
};

export default Product;
