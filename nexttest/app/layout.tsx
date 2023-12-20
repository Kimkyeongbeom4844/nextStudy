import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(123);
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header>root layout의 헤더</header>
        {children}
        <footer>root layout의 푸터</footer>
      </body>
    </html>
  );
}