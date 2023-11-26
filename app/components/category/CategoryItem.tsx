import { HiArrowSmRight } from "react-icons/hi";

interface CategoryItemProps{
    name:string;
}

const CategoryItem:React.FC<CategoryItemProps> = ({name}) => {
    return ( 
        <div className="flex flex-col" >

        <div className="
        py-2 
        w-full 
        px-12
        flex 
        items-center 
        justify-between 
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
            {name}
            <HiArrowSmRight />
        </div>
        </div>
     );
}
 
export default CategoryItem;