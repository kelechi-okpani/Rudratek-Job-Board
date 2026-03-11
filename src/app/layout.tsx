
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { Navbar } from "@/component/layout/Navebar";
import { Footer } from "@/component/layout/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rudratek | Build the Future of Social Commerce",
  description: "Join a world-class team building high-availability infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020617] text-slate-200 antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}