import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5 Non Blondes - Official Website",
  description: "Probably the best party band in BXL",
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
