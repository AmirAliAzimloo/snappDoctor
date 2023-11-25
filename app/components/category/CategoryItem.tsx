import { HiArrowSmRight } from "react-icons/hi";

interface CategoryItemProps{
    name:string;
    id:string;
}

const CategoryItem:React.FC<CategoryItemProps> = ({name,id}) => {
    return ( 
        <div className="flex flex-col" >

        <div className="
        py-2 
        w-full 
        flex 
        items-center 
        justify-center 
        text-gray-600 
        border-b-2 
        border-gray-200
        shadow-sm
        shadow-gray-100
        bg-gray-100
        space-x-4
        cursor-pointer
        hover:text-gray-900
        hover:bg-gray-300
        transition-all
        duration-300
        ">
            <div>
                Category Item
            </div>
            <HiArrowSmRight />
        </div>
        </div>
     );
}
 
export default CategoryItem;