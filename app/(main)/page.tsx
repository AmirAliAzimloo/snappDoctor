import DesktopCategories from "./components/Categories/Desktop/DesktopCategories";
import MobileCategories from "./components/Categories/Mobile/MobileCategories";
import ProductList from "./components/Products/ProductList";

export default function Home() {
  return (
    
    <section className="w-full h-full flex flex-col md:flex-row justify-between items-start gap-5 py-5 ">
      
   <DesktopCategories />


   <MobileCategories />
    
   <ProductList />


  </section>
 
  )
}
