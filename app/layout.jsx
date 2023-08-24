import Header from '@/components/Header'
import '../styles/globals.css'
import { Lato } from 'next/font/google'
import { CarritoProvider } from '@/context/Carrito-Provider'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'] 
})

export const metadata = {
  title: 'Tienda de ropa online',
  description: 'Tienda de ropa online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <CarritoProvider>
          <Header />
          {children}
        </CarritoProvider>
        
      </body>
    </html>
  )
}
