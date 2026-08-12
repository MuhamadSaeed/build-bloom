import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Build Bloom | Software House",
    template: "%s | Build Bloom",
  },
  description:
    "Build Bloom builds custom software, websites, mobile applications, and digital products designed to solve real business problems and help businesses grow.",
  keywords: [
    "Build Bloom",
    "Software House",
    "Software Development",
    "Web Development",
    "Custom Software",
    "Mobile Applications",
    "AI Solutions",
    "UI/UX Design",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  authors: [
    {
      name: "Build Bloom",
    },
  ],
  creator: "Build Bloom",
  publisher: "Build Bloom",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}