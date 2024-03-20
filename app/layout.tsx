import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import { register } from 'swiper/element/bundle';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWCorp Aduan Sisa",
  description: "SWCorp Aduan Sisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  register();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
