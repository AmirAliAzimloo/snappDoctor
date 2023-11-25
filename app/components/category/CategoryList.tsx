import { Category } from "@/app/types";
import CategoryItem from "./CategoryItem";

interface CategoryListProps{
    categorys:Category[]
}

const CategoryList:React.FC<CategoryListProps> = ({categorys}) => {
        return ( 
                categorys.map(category=>
                <CategoryItem key={category.id} name={category.name} id={category.id} />
                )
         );
    }
     
    export default CategoryList;