import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kalanaeshan.dev'),
  title: "Kalana Eshan Dharmarathne | Full Stack Developer",
  description: "Passionate Full Stack Developer and CS Undergraduate. Building modern web applications with React, Next.js, and cutting-edge technologies. Explore my projects, skills, and journey in software development.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Software Engineer", "Portfolio"],
  authors: [{ name: "Kalana Eshan Dharmarathne" }],
  creator: "Kalana Eshan Dharmarathne",
  publisher: "Kalana Eshan Dharmarathne",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kalanaeshan.dev",
    title: "Kalana Eshan Dharmarathne | Full Stack Developer",
    description: "Passionate Full Stack Developer and CS Undergraduate. Building modern web applications with React, Next.js, and cutting-edge technologies.",
    siteName: "Kalana Eshan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kalana Eshan Dharmarathne - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalana Eshan Dharmarathne | Full Stack Developer",
    description: "Passionate Full Stack Developer and CS Undergraduate. Building modern web applications with React, Next.js, and cutting-edge technologies.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
