import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JPGames",
  description: "O melhor lugar para baver dos seus jogos favoritos",
  keywords: ['gmaes','jogos','video-games'],
  openGraph:{
   images: [`${process.env.PROJECT_URL}/logo3.png`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
