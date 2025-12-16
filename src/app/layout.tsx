import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import '../styles/index.css';
import {NotistackProvider} from './notistackProvider';
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nexlura.com'),
  title: {
    template: '%s - Nexlura | Custom Software Development Company',
    default: 'Nexlura - Custom Software Development Company | AI, Blockchain & Enterprise Solutions'
  },
  description: 'Nexlura is a leading software development company based in Freetown, Sierra Leone. We provide custom software development, AI & machine learning solutions, Web3 & blockchain development, QA testing, and technical support services to businesses worldwide.',
  keywords: [
    'custom software development',
    'software development company',
    'AI machine learning solutions',
    'Web3 blockchain development',
    'quality assurance services',
    'technical support services',
    'offshore software development',
    'software outsourcing',
    'full-stack development',
    'cloud-based solutions',
    'enterprise software solutions',
    'digital transformation',
    'software consulting',
    'Freetown software company',
    'Sierra Leone software development',
    'custom software solutions',
    'software development services',
    'AI automation',
    'blockchain technology',
    'software testing services',
    'IT support services',
    'web development',
    'mobile app development',
    'software engineering',
    'technology consulting'
  ],
  authors: [{ name: 'Nexlura LLC' }],
  creator: 'Nexlura LLC',
  publisher: 'Nexlura LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexlura.com',
    siteName: 'Nexlura',
    title: 'Nexlura - Custom Software Development Company | AI, Blockchain & Enterprise Solutions',
    description: 'Leading software development company in Freetown, Sierra Leone. Custom software, AI/ML, blockchain, QA testing, and technical support for businesses worldwide.',
    images: [
      {
        url: '/logo-files/logo-icon.png',
        width: 1200,
        height: 630,
        alt: 'Nexlura - Custom Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexlura - Custom Software Development Company',
    description: 'Leading software development company providing AI, blockchain, and enterprise solutions worldwide.',
    creator: '@nexlura',
    images: ['/logo-files/logo-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexlura.com',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexlura',
  legalName: 'Nexlura LLC',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexlura.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexlura.com'}/logo-files/logo-icon.png`,
  description: 'Custom software development company specializing in AI, blockchain, and enterprise solutions',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '26a Black Hall Road, PWD, Kissy',
    addressLocality: 'Freetown',
    addressCountry: 'SL',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+232-79-712365',
    contactType: 'Customer Service',
    email: 'nexlura@gmail.com',
    areaServed: 'Worldwide',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/nexlura-llc',
    'https://twitter.com/nexlura',
    'https://www.facebook.com/share/16GiVdnXPV/',
  ],
  foundingDate: '2024',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '5-10',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  knowsAbout: [
    'Software Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Blockchain Technology',
    'Web3',
    'Quality Assurance',
    'Technical Support',
    'Cloud Computing',
    'Digital Transformation',
  ],
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
        <StructuredData data={organizationSchema} />
      </head>
      <body className="text-gray-950 antialiased">
        <NotistackProvider>
            {children}
        </NotistackProvider>
      </body>
    </html>
  )
}
