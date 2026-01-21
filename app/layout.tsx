import type { Metadata } from "next";
import { Inter, Lustria, Hedvig_Letters_Serif, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lustria = Lustria({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lustria",
});

const hedvigLettersSerif = Hedvig_Letters_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hedvig",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "ItsMarta UI Kit - Premium Tailwind CSS Components & Templates",
    template: "%s | ItsMarta UI Kit",
  },
  description:
    "Hand-crafted, production-ready Tailwind CSS components and sections. Copy, paste, and ship beautiful websites faster.",
  keywords: [
    "tailwind css",
    "react components",
    "ui kit",
    "tailwind templates",
    "web design",
    "ui components",
  ],
  authors: [{ name: "ItsMarta" }],
  creator: "ItsMarta",
  publisher: "ItsMarta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsmarta.co",
    title: "ItsMarta UI Kit - Premium Tailwind CSS Components",
    description:
      "Hand-crafted, production-ready Tailwind CSS components and sections.",
    siteName: "ItsMarta UI Kit",
    images: [
      {
        url: "https://itsmarta.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "ItsMarta UI Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ItsMarta UI Kit - Premium Tailwind CSS Components",
    description:
      "Hand-crafted, production-ready Tailwind CSS components and sections.",
    images: ["https://itsmarta.co/og-image.png"],
    creator: "@itsmarta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon itsmarta/favicon.ico" },
      { url: "/favicon itsmarta/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon itsmarta/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon itsmarta/favicon.ico",
    apple: [
      { url: "/favicon itsmarta/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon itsmarta/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lustria.variable} ${hedvigLettersSerif.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
