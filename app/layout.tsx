import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilham Maulana Akbar - Full Stack Web Developer",
  description:
    "Portfolio of Ilham Maulana Akbar, a Full Stack Web Developer focused on Laravel, WordPress, and responsive digital systems.",
  openGraph: {
    title: "Ilham Maulana Akbar - Full Stack Web Developer",
    description:
      "Full Stack Web Developer portfolio featuring Laravel, WordPress, PHP, MySQL, and responsive web projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-950 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
