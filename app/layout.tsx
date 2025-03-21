import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientHeader from '../components/ClientHeader';
import "./globals.css";
import ClientFooter from "../components/footer";

export const metadata: Metadata = {
  title: "Logan Whitten's Website",
  description: "Logan Whitten is a designer and technician ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-calendas h-lvh">
        <ClientHeader />
        <div className="h-full w-screen">{children}</div>
        <ClientFooter />
      </body>
    </html>
  );
}
