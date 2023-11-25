import Image from "next/image";


interface ProductItemProps{
    name:string;
    id:string
}

const ProductItem:React.FC<ProductItemProps> = ({name,id}) => {
    return ( 
        <div  className="px-8" >
            <Image
            src="/5.jpg"
            width={500}
            height={500}
            alt="Product image"
            className="rounded-md"
            />

            <div className=" flex flex-row space-x-80 items-center justify-between" >

                <div>
                    {name}
                </div>

                <div>
                    {id}
                </div>

            </div>
        </div>
     );
}
 
export default ProductItem;