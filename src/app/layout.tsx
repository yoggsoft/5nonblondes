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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
