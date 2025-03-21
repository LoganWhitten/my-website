import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body className="font-calendas h-lvh pb-10">
        <div className="h-full w-screen">{children}</div>
        <footer className="absolute z-50 w-screen text-center flex gap-1 h-10 place-items-center place-content-center font-calendas italic text-gray-400 text-sm">
          © {new Date().getFullYear()}
          <a
            className="hover:underline"
            href="https://www.instagram.com/loganwhitten512"
          >
            Logan Whitten
          </a>
        </footer>
      </body>
    </html>
  );
}
