import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import CalProvider from "./components/CalProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_URL } from "@/lib/site";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "StackCraft Lab - Software for Ambitious Businesses",
  description: "We engineer, design, and scale powerful software solutions for startups, SaaS, and enterprises",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} font-sans antialiased`}
      >
        <CalProvider />
        {children}
        {/* ── Google Analytics — only loads in production ── */}
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        )}
      </body>
    </html>
  );
}
