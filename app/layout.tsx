import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amix — Premium SaaS Agency | School ERP, POS, E-Commerce & More",
  description:
    "Custom SaaS applications, ERP systems, POS platforms, eCommerce solutions, and business websites engineered for growth. Building modern software that powers schools, restaurants & businesses.",
  keywords: [
    "SaaS agency",
    "school ERP",
    "restaurant POS",
    "banquet management",
    "e-commerce development",
    "business websites",
    "custom software",
    "India",
  ],
  authors: [{ name: "Amix" }],
  openGraph: {
    title: "Amix — Premium SaaS Agency",
    description:
      "Building modern software that powers schools, restaurants & businesses worldwide.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amix — Premium SaaS Agency",
    description:
      "Custom SaaS applications, ERP systems, POS platforms, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
