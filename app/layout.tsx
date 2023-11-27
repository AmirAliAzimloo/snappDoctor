import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SplashScreenProvider from "@/app/providers/splash-screen-provider"
import { SWRProvider } from './providers/SWR/SWRProvider'
const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className}
       transition-all
       duration-75 
       overflow-x-hidden
       overflow-y-scroll
       scrollbar-thin 
     scrollbar-thumb-gray-300
       scrollbar-thumb-rounded-xl
      `}>
        <SWRProvider>
        <SplashScreenProvider>

        <div className='bg-gray-100 flex w-full flex-col min-h-full overflow-hidden' >

        <Header />

        {children}

        <Footer/>

        </div>
        </SplashScreenProvider>
        </SWRProvider>
      </body>
    </html>
  )
}
