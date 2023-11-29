import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Providers from "@/stores/Providers";

const notoSansKr400 = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <Providers>
      <html lang="ko" className={notoSansKr400.className}>
        <head>
          <title>테스트</title>
        </head>
        <body>
          <h1>노토산스케이알</h1>
          {children}
        </body>
      </html>
    </Providers>
  );
}
