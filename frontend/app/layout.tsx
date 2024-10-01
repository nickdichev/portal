import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portal Wholesale - Connect Fashion Buyers and Brands",
  description: "Portal Wholesale is the premier platform connecting fashion buyers and wholesale brands. Discover, connect, and grow your fashion business.",
  robots: "noindex, nofollow",
  keywords: "fashion wholesale, buyer platform, brand discovery, wholesale marketplace",
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://www.portalwholesale.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portal Wholesale - Connect Fashion Buyers and Brands",
    description: "Discover and connect with top fashion wholesale brands on Portal Wholesale. Streamline your buying process and grow your business.",
    images: ["https://www.portalwholesale.com/og-image.jpg"],
    url: "https://www.portalwholesale.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
