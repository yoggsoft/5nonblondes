import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5 Non Blondes - Official Website",
  description: "Probably the best party band in BXL",
  openGraph: {
    siteName: "5NB - 5NonBlondes",
    title: "5 Non Blondes - Official Website",
    url: "http://www.5nonblondes.com",
    type: "website",
    description: "Probably the best party band in BXL - Official Website",
    locale: "en_US",
    images: "/img/portraits/portrait1.jpg"
  },
  twitter: {
    card: 'summary_large_image',
    site: "@5non.blondes",
    title: "5NB - 5NonBlondes",
    description: "Probably the best party band in BXL",
    creator: "@5non.blondes",
    images: "/img/portraits/portrait1.jpg"
  }
};

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "artist",
  "name": "5 Non Blondes",
  "url": "http://www.woorank.com",
  "disambiguatingDescription": "Best party cover band in BXL",
  "nationality": "Italian, Venezuelan",
  "sameAs": [
    "https://www.facebook.com/people/5NonBlondes-5NB/61550656681487/?sk=about",
    "https://www.tiktok.com/@5non.blondes",
    "https://www.instagram.com/5nblondes"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="url" content="http://www.5nonblondes.com" />
        <meta itemProp="url" content="http://www.5nonblondes.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
