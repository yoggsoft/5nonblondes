import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ww.5nonblondes.com'),
  title: '5 Non Blondes ........ The best party band in BXL',
  description: 'The 5 Non Blondes are the most celebrated DISCO PARTY band in Brussels.',
  openGraph: {
    siteName: '5NB - 5NonBlondes',
    title: 'The most celebrated Party Band ................................................. the DISCO BAND for festivals, high end events, PAC, Casinos, etc.. - 5 Non Blondes',
    url: 'http://www.5nonblondes.com',
    type: 'website',
    description: 'The 5 Non Blondes are the most celebrated DISCO PARTY band in Brussels.',
    locale: 'en_US',
    images: 'http://www.5nonblondes.com/img/band-room.JPG'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@5non.blondes',
    title: '5NB - 5NonBlondes',
    description: 'Probably the best party band in BXL',
    creator: '@5non.blondes',
    images: 'http://www.5nonblondes.com/img/band-room.JPG'
  }
};

const jsonLd = {
  '@context': 'http://schema.org',
  '@type': 'WebSite',
  'name': 'The most celebrated Party Band ................................................. the DISCO BAND for festivals, high end events, PAC, Casinos, etc.. - 5 Non Blondes',
  'url': 'http://www.5nonblondes.com',
  'disambiguatingDescription': 'Best party cover band in BXL',
  'sameAs': [
    'https://www.facebook.com/people/5NonBlondes-5NB/61550656681487/?sk=about',
    'https://www.tiktok.com/@5non.blondes',
    'https://www.instagram.com/5nblondes'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='url' content='http://www.5nonblondes.com' />
        <meta itemProp='url' content='http://www.5nonblondes.com' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${robotoCondensed.className}`}>
        {children}
      </body>
    </html>
  );
}
