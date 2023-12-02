import { SearchContextProvider } from './context/search'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BrakeSYS',
  description: 'BrakeSYS',
}

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
         <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </SearchContextProvider>
 
  )
}
