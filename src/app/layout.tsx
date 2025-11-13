import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishnu | Portfolio",
  description:
    "Full stack developer and ML engineer crafting human-centered products. Explore featured projects, experiments, and ways to collaborate.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Vishnu | Portfolio",
    description:
      "Full stack developer and ML engineer crafting human-centered products.",
    url: "https://example.com",
    siteName: "Vishnu Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu | Portfolio",
    description:
      "Full stack developer and ML engineer crafting human-centered products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
