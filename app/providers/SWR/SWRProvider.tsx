"use client"
import { axiosPrivate } from "@/app/libs/axios";
// import axios from "axios";
import { SWRConfig } from "swr";
export const SWRProvider = ({children}:{children:React.ReactNode})=>{
    return (
        <SWRConfig
        value={{ fetcher: (url) => axiosPrivate.get(url).then(res => res.data) }}
        >
        {children}
        </SWRConfig>
    )
}