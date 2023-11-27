"use client"
import axios from "axios";
import { SWRConfig } from "swr";
export const SWRProvider = ({children}:{children:React.ReactNode})=>{
    return (
        <SWRConfig
        value={{ fetcher: (url) => axios.get(url).then(res => res.data) }}
        >
        {children}
        </SWRConfig>
    )
}