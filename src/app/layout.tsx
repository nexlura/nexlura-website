import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import '../styles/index.css';
import {NotistackProvider} from './notistackProvider';

export const metadata: Metadata = {
  title: {
    template: '%s - Nexlura',
    default: 'Nexlura - Custom Software Solutions to Accelerate Your Growth'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link rel="icon" href="/src/app/faviconn.ico" sizes="24px" />
      </head>
      <body className="text-gray-950 antialiased">
        <NotistackProvider>
            {children}
        </NotistackProvider>
      </body>
    </html>
  )
}
