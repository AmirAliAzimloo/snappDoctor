import ProductList from "../../components/Products/ProductList";

interface IParams {
    slug?: string;
  }

const Index = ({ params }:{params:IParams}) => {

    return ( 
        <ProductList searchKey={params.slug} />
     );
}
 
export default Index; 