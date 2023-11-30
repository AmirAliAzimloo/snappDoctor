import ProductList from "../../components/Products/ProductList";

interface IParams {
    slug?: string;
  }

const Index = ({ params }:{params:IParams}) => {
    return ( 
        <ProductList filterCategory={params.slug} />
     );
}
 
export default Index; 