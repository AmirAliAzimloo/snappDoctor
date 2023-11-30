import { PulseLoader } from "react-spinners";

interface LoadingProps{
    isLoading:boolean
    color?:string
}

const Loader:React.FC<LoadingProps> = ({isLoading,color = "#36d7b7"}) => {
    return ( 
      <div className="h-screen w-full flex items-center justify-center " >
        <PulseLoader  loading={isLoading} color={color} size={6} />
      </div>
     );
}
 
export default Loader;