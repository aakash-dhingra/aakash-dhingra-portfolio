import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/StarBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aakash Dhingra | Antigravity Portfolio",
  description: "The Navigator of Software Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-space-black text-foreground overflow-x-hidden`}
      >
        <StarBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
