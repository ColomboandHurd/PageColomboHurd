import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import FloatingButtons from "../components/FloatingButtons";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colombo & Hurd | Abogados de Inmigración",
  description: "Asesoría legal migratoria en EE.UU. por expertos. Firma boutique fundada por inmigrantes, dedicada a clientes de todo el mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) para Google Ads */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17298183701" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17298183701');
          `}
        </Script>
        {/* Google tag (gtag.js) para Google Analytics GA4 */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-N4Q8Y3RZZ4" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N4Q8Y3RZZ4');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
