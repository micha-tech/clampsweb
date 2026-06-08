import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clamps Engineering Solutions LTD",
      description:
    "Critical infrastructure engineering for water systems, fire protection, electrical, automation, and industrial projects in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-steel-50 pb-20 text-navy-900 antialiased sm:pb-0">
        <Navbar />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
