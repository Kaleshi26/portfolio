import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js + TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
