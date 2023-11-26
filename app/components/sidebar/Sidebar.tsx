import axios from "axios";
import CategoryList from "../category/CategoryList";

const getData =async (url:string) => {
  const data = await axios.get(url)
  return data.data
}

const Sidebar = async () => {
  const categories = await getData("https://fakestoreapi.com/products/categories")

  return (
    <div
      className=" 
      hidden 
      md:block
      md:w-96 
      max-h-screen
      w-screen 
      transition-all
      duration-75 
      overflow-x-hidden
      overflow-y-scroll
      scrollbar-thin 
    scrollbar-thumb-gray-300
      scrollbar-thumb-rounded-xl
        "
    >
      <CategoryList
        categories={[...categories]}
      />
    </div>
  );
};

export default Sidebar;
