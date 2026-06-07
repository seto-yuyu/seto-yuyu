import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "瀬戸優結｜1000万人の女性にスロセを届ける",
  description: "パートナーとの絆を深める「スロセ」の知識が、あなたの関係性を根本から変えます。20〜30代女性向け・18歳以上限定。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
