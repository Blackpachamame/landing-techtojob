import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import messages from "../../messages/es.json";
import { siteName, siteUrl } from "@/config/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: messages.Metadata.title,
    template: "%s | TechToJob",
  },
  description: messages.Metadata.description,
  applicationName: siteName,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  icons: {
    icon: [
      { url: "/brand/symbol-positive.svg", type: "image/svg+xml", sizes: "any", media: "(prefers-color-scheme: light)" },
      { url: "/brand/symbol-negative.svg", type: "image/svg+xml", sizes: "any", media: "(prefers-color-scheme: dark)" },
    ],
  },
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sora.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-brand-dark font-sans text-brand-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-brand-mint focus:px-5 focus:py-3 focus:text-brand-dark focus:outline-2 focus:outline-offset-4 focus:outline-brand-dark">
          {messages.Navigation.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
