import ProductCard from "./ProductCard";

const ProductList = () => {
    return ( 
        
    <section className="w-full md:w-3/4 bg-white rounded-lg shadow-lg p-5">
    <div className="flex justify-start flex-wrap items-center -m-4">
      {
        [1,2,3,4,5,6,7].map((product,index) => (
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3 h-auto " key={index}>

            <ProductCard

            />

          </div>
        ))}
    </div>
  </section>
     );
}
 
export default ProductList;