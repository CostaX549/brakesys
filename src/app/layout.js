import { SearchContextProvider } from './context/search'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BrakeSYS',
  description: 'brakesys',
 verification: {
  google: "nun9UckWe_3wFzC44_J99JvDc0AncCdeglBNzTb4uwg"
 },
 generator: 'Next.js',
 applicationName: 'brakesys',
 referrer: 'origin-when-cross-origin',
 keywords: ['Next.js', 'Mecânica', 'BrakeSYS'],
 authors: [{ name: 'Junior' }, { name: 'Senai', url: 'https://nextjs.org' }],
 creator: 'Junior',
 publisher: 'Junior',
 formatDetection: {
   email: false,
   address: false,
   telephone: false,
 },
 openGraph: {
  title: 'BrakeSYS',
  description: 'brakeys',
},
  
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
