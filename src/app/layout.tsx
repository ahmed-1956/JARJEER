import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jarjeer.vercel.app"),
  title: "JARJEER",
  description:
    "JARJEER is a modern fintech dashboard featuring financial analytics, account management, transactions, investments, and interactive data visualizations.",
  openGraph: {
    title: "JARJEER",
    description:
      "JARJEER is a modern fintech dashboard featuring financial analytics, account management, transactions, investments, and interactive data visualizations.",
    type: "website",
    url: "https://jarjeer.vercel.app",
    images: [{ url: "/screenshots/JARJEER.jpg", width: 1200, height: 644 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JARJEER",
    description:
      "JARJEER is a modern fintech dashboard featuring financial analytics, account management, transactions, investments, and interactive data visualizations.",
    images: ["/screenshots/JARJEER.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased font-sans`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
