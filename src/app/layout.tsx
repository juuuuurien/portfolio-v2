import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Julien Lopez | Software Engineer",
    template: "%s | Julien Lopez"
  },
  description: "Julien Lopez is a Software Engineer with a passion for building user-friendly web applications. Check out his portfolio!",
  keywords: ["Front End Engineer", "Software Engineer", "Web Developer", "React", "Next.js", "JavaScript", "Portfolio", "Julien Lopez"],
  authors: [{ name: "Julien Lopez" }],
  creator: "Julien Lopez",
  publisher: "Julien Lopez",
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julienlopez.me", // Replace with your actual URL
    siteName: "Julien Lopez Portfolio",
    title: "Julien Lopez | Software Engineer",
    description: "Julien Lopez is a Software Engineer with a passion for building user-friendly web applications. Check out his portfolio!",
    images: [
      {
        url: "/og-image.jpg", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Julien Lopez - Software Engineer",
      },
    ],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Manifest
  manifest: "/site.webmanifest",
  
  // Additional
  metadataBase: new URL("https://julienlopez.me"), // Replace with your actual URL
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}