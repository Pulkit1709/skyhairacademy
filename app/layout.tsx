import type { Metadata } from 'next'
import { businessConfig } from '@/config/business'

export const metadata: Metadata = {
  title: `${businessConfig.name} - Professional Hair Styling Course Delhi`,
  description: businessConfig.subtitle,
  keywords: businessConfig.seoKeywords.join(', '),
  openGraph: {
    title: `${businessConfig.name} - Professional Hair Styling Course`,
    description: businessConfig.subtitle,
    type: 'website',
    url: 'https://skyhaircademy.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessConfig.name} - Professional Hair Styling Course`,
    description: businessConfig.subtitle,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: businessConfig.name,
              image: 'https://skyhaircademy.com/logo.png',
              description: businessConfig.subtitle,
              address: {
                '@type': 'PostalAddress',
                streetAddress: businessConfig.contact.location,
                addressLocality: 'Delhi',
                postalCode: '110058',
                addressCountry: 'IN',
              },
              telephone: businessConfig.contact.phone,
              email: businessConfig.contact.email,
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
