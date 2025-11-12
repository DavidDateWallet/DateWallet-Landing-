import type React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DateWallet - Find Unique Date Experiences",
  description:
    "Download to find the most unique and fun date experiences in your city",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${outfit.variable}`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
