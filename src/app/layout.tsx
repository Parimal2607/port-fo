import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="h-screen flex flex-col overflow-hidden">{children}</body>
    </html>
  );
}
