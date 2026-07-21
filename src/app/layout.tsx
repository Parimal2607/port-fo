import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { PlayerProvider } from "@/components/PlayerContext";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parimal Sharma — Frontend Engineer Portfolio",
  description:
    "Senior Frontend Engineer with 4+ years of experience building scalable SaaS platforms, enterprise applications, and AI-powered products.",
  icons: {
    icon: "/favicon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body className="h-dvh flex flex-col overflow-hidden">
        <PlayerProvider>{children}</PlayerProvider>
      </body>
    </html>
  );
}
