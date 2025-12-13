import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   metadataBase: new URL("https://www.djwillyhomes.com"),
  title: "Willy Homes — DJ & Darbuka (Barcelona)",
  description:
    "DJ (funk / disco / house) + darbuka workshops. Bookings for clubs, private events and corporate.",
  openGraph: {
    title: "Willy Homes — DJ & Darbuka (Barcelona)",
    description:
      "Funk • Disco • House DJ + Darbuka workshops. Bookings for events.",
    url: "https://www.djwillyhomes.com",
    siteName: "Willy Homes",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Willy Homes — DJ & Darbuka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Willy Homes — DJ & Darbuka (Barcelona)",
    description:
      "Funk • Disco • House DJ + Darbuka workshops. Bookings for events.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
