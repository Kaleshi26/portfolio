import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio built with Next.js 15 + Tailwind v4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container mx-auto px-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
