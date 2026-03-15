import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import CalProvider from "./components/CalProvider";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "StackCraft Lab - Software for Ambitious Businesses",
  description: "We engineer, design, and scale powerful software solutions for startups, SaaS, and enterprises",
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
      </body>
    </html>
  );
}
