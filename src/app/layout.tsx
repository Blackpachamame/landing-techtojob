import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import messages from "../../messages/es.json";
import { siteUrl } from "@/config/site";
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
    template: `%s | ${messages.Metadata.title}`,
  },
  description: messages.Metadata.description,
  icons: {
    icon: {
      url: "/brand/symbol-positive.svg",
      type: "image/svg+xml",
      sizes: "any",
    },
  },
  robots: siteUrl ? undefined : { index: false, follow: false },
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
    <html lang="es" className={sora.variable}>
      <body className="min-h-screen bg-brand-dark font-sans text-brand-white">
        {children}
      </body>
    </html>
  );
}
