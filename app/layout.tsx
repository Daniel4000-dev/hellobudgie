import Header from "@/components/header";
import Pagewrapper from "@/components/pagewrapper";
import Sidebar from "@/components/sidebar";
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
          min-h-screen overflowhidden
          ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <Sidebar />
          <div className="flex flex-col min-h-screen w-full pt-[16vh] md:pt-[10vh]">
            <Header />
            <Pagewrapper children={children} />
          </div>
        </>
      </body>
    </html>
  );
}
