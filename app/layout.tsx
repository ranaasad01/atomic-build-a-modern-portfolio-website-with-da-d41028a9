import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Alex Chen — Full-Stack Developer",
  description:
    "Personal portfolio of Alex Chen, a full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["developer", "portfolio", "full-stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen — Full-Stack Developer",
    description: "Building beautiful, performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = [GeistSans.variable, GeistMono.variable].join(" ");
  return (
    <html lang="en" className={fontClasses} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
