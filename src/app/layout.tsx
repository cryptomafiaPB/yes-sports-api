import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yes-Sports FREE API",
  description: "Free and open-source Sports real-time statistics API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="https://i.imgur.com/L9EqYmK.png" type="image" />
      <body className={inter.className}>
        <Sidebar />
        <TopBar />
        {children}
      </body>
    </html>
  );
}
