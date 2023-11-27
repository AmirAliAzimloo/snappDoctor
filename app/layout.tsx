import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

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
      <body className={inter.className}>

        <div className='bg-gray-100 flex w-full flex-col min-h-full overflow-hidden' >

        <Header />

        {children}

        <Footer/>

        </div>

      </body>
    </html>
  )
}
