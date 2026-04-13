import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "endpnt.dev - Developer APIs that just work",
  description: "Screenshot, QR codes, link previews, image processing, and validation APIs. No AI dependencies. No bloat. Just clean, fast endpoints.",
  keywords: ["API", "developer tools", "screenshot API", "QR code API", "URL preview", "image conversion", "email validation"],
  authors: [{ name: "JK" }],
  creator: "JK",
  publisher: "endpnt.dev",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://endpnt.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "endpnt.dev",
    title: "endpnt.dev - Developer APIs that just work",
    description: "Screenshot, QR codes, link previews, image processing, and validation APIs. No AI dependencies. No bloat. Just clean, fast endpoints.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "endpnt.dev - Developer APIs that just work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "endpnt.dev - Developer APIs that just work",
    description: "Screenshot, QR codes, link previews, image processing, and validation APIs. No AI dependencies. No bloat.",
    images: ["/og-image.png"],
    creator: "@endpnt_dev",
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
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}