import type { Metadata } from "next";
import "./globals.css";
import { FloatingDock } from "@/components/FloatingDock";

export const metadata: Metadata = {
  title: "PhysEd-Pro",
  description:
    "Complete CBSE Class 12 Physical Education question bank with solutions. Previous year papers (2022-2025), chapter-wise questions, marking schemes, and smart search.",
};

import { QuizProvider } from "@/context/QuizContext";
import { ThemeProvider } from "@/components/Providers";
import { ThemeToggle } from "@/components/ThemeToggle";

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <QuizProvider>
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <main className="relative z-10 pb-28">{children}</main>
            <FloatingDock />
            <Analytics />
          </QuizProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
