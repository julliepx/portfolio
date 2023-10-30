import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import { DeviceContextProvider } from './context/store'
import Header from './components/regular/Header'
import Footer from './components/regular/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jullie Paixão',
  description: 'Fullstack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DeviceContextProvider>
          <Header />
          {children}
          <Footer />
        </DeviceContextProvider>
      </body>
    </html>
  )
}
