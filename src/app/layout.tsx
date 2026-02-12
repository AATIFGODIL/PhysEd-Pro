import type { Metadata } from "next";
import "./globals.css";
import { FloatingDock } from "@/components/FloatingDock";

export const metadata: Metadata = {
  title: "PhysEd Pro – CBSE Class 12 Master Archive",
  description:
    "Complete CBSE Class 12 Physical Education question bank with solutions. Previous year papers (2022-2025), chapter-wise questions, marking schemes, and smart search.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <main className="relative z-10 pb-28">{children}</main>
        <FloatingDock />
      </body>
    </html>
  );
}
