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
  title: "Stainless Steel Wire Mesh Manufacturer & Exporter | SS304, SS316, SS316L",
  description: "Buy Premium Stainless Steel Wire Mesh in SS304, SS316 & SS316L grades. Manufacturer, supplier & exporter for industrial filtration and screening.",
  verification: {
    google: "iN-5WvmXb7lw51gwrwMCd8B_j9yCmUCU4i7aR4DxzCU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
