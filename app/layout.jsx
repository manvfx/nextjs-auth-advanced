import '../styles/globals.css';
import Header from '@/components/header';
import NextAuthProvider from './providers/NextAuthProvider';


export const metadata = {
   title: 'Super Auth with NEXT 13',
   description: 'Super Auth with NEXT 13',
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className=' container mx-auto my-8 flex flex-col gap-6'><NextAuthProvider><Header/>{children}</NextAuthProvider></body>
      </html>
   )
}
