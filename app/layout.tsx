import type { Metadata } from 'next'
import './globals.css'
import  {SWRProvider}  from './providers/SWR/SWRProvider'


export const metadata: Metadata = {
  title: 'Store App',
  description: 'Develop This Simple Store App For Hiring In Snapp Doctor ',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {




  return (
      
    <html lang="en">
    <body className="bg-[#f2f2f2]
    transition-all
    duration-75 
    overflow-x-hidden
    overflow-y-scroll
    scrollbar-thin 
  scrollbar-thumb-gray-300
    scrollbar-thumb-rounded-xl
    ">
<SWRProvider>

      {children}
</SWRProvider>
      
      </body>
  </html>
  )
}
