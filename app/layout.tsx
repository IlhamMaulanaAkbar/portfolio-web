import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilham Maulana Akbar - Portfolio",
  description:
    "Portfolio of Ilham Maulana Akbar, a web developer focused on scalable web applications and business systems.",
  openGraph: {
    title: "Ilham Maulana Akbar - Portfolio",
    description:
      "Web developer portfolio featuring Laravel, PHP, MySQL, and JavaScript projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-950 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
