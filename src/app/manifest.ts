import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nexlura - Custom Software Development Company',
    short_name: 'Nexlura',
    description: 'Leading software development company providing AI, blockchain, and enterprise solutions worldwide',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo-files/logo-icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

