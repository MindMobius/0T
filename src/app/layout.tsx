import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "nes.css/css/nes.min.css";

// Press Start 2P 是 NES.css 推荐的像素字体
const pressStart2P = localFont({
  src: "./fonts/PressStart2P-Regular.ttf",
  variable: "--font-press-start-2p",
});

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

const fusionPixel = localFont({
  src: "./fonts/fusion-pixel-12px-proportional-zh_hans.ttf",
  variable: "--font-fusion-pixel",
});

export const metadata: Metadata = {
  title: "魔轨世界",
  description: "魔轨世界信息站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${pressStart2P.variable} ${geistSans.variable} ${geistMono.variable} ${fusionPixel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
