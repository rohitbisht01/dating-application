import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const recursive = Recursive({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeartMatch",
  description:
    "Find meaningful connections with our modern dating app, featuring smart matchmaking, real-time chat, and a secure platform to meet like-minded people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
