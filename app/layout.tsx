import type { Metadata } from "next";
import "./globals.css";
import { sora } from "@/libs/fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "TypeMaster – Keyboard Speed Game",
  description:
    "Sharpen your typing skills with TypeMaster — a fun, fast-paced, and educational typing game built with Next.js 14, Tailwind CSS, and TypeScript.",
  keywords: [
    "typing game",
    "keyboard speed test",
    "typing speed challenge",
    "Next.js game",
    "TypeMaster",
    "educational games",
    "typing practice",
    "tailwindcss",
    "typescript",
    "react game",
  ],
  authors: [
    { name: "Kaneza Fred Amani", url: "https://kanezaio.netlify.app/" },
  ],
  creator: "Your Name",
  metadataBase: new URL("https://typemaster.vercel.app"), // Replace with your actual domain
  openGraph: {
    title: "TypeMaster – Keyboard Speed Game",
    description:
      "Test your typing speed, accuracy, and reflexes with TypeMaster — the ultimate keyboard game experience.",
    url: "https://typemaster.vercel.app", // Replace with your deployed site URL
    siteName: "TypeMaster",
    images: [
      {
        url: "/og-image.png", // Place this image in your /public folder
        width: 1200,
        height: 630,
        alt: "TypeMaster Game Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeMaster – Keyboard Speed Game",
    description:
      "Compete against time and yourself. Improve typing speed and accuracy with this fun, modern keyboard game.",
    creator: "@yourhandle", // Optional: your Twitter handle
    images: ["/og-image.png"],
  },
  // themeColor: "#0a0a0a", // Matches dark mode background
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} bg-gray-950 text-zinc-100 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
