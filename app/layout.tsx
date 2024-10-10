import Header from "@/components/Header";
import Pagewrapper from "@/components/Pagewrapper";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hellobudgie",
  description: "HelloBudgie Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          min-h-screen custom-scrollbar
          ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <Sidebar />
          <div className="flex bg-black flex-col min-h-screen w-full pt-[12vh] md:pt-[11vh]">
            <Header />
            <Pagewrapper children={children} />
          </div>
        </>
      </body>
    </html>
  );
}
