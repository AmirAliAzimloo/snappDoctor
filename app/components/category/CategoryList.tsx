import { Category } from "@/app/types";
import CategoryItem from "./CategoryItem";

interface CategoryListProps{
    categories:string[]
}

const CategoryList:React.FC<CategoryListProps> = ({categories}) => {
        return ( 
                categories?.map((category,index)=>
                <CategoryItem key={index} name={category} />
                )
         );
    }
     
    export default CategoryList;