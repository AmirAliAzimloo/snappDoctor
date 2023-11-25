import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import SplashScreenProvider from "@/app/providers/splash-screen-provider"

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
    <body className={`${inter.className}`}>
    <SplashScreenProvider>

    <div className='container' >
      <Header /> 

      <div className=' w-screen flex items-center justify-center' >
      <Sidebar />
      {children}
      </div>
      
      </div>

    </SplashScreenProvider>
     
    </body>
  </html>
  )
}
