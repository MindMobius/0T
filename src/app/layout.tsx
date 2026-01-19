import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "魔轨列车 - 魔能辐照生存游戏",
  description: "一款以“魔能辐照世界”为舞台的联机生存动作建造游戏。你驾驶并改装一列可以不断扩展的魔轨列车，在高风险高回报的辐照区狩猎、采集、贸易、布防。",
  keywords: ["魔轨列车", "生存游戏", "联机合作", "建造", "魔能", "辐照", "Steam"],
  authors: [{ name: "RK_STUDIO" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "魔轨列车 - 魔能辐照生存游戏",
    description: "一款以“魔能辐照世界”为舞台的联机生存动作建造游戏",
    url: "https://0t.906051999.xyz/",
    siteName: "魔轨列车",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "魔轨列车 - 魔能辐照生存游戏",
    description: "一款以“魔能辐照世界”为舞台的联机生存动作建造游戏",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
