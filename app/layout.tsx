import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Patrick Aimé Kouassi",
  description:
    "Bienvenue sur le portfolio de Patrick Aimé Kouassi, développeur web backend.",
  generator: "Patrick Aimé Kouassi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
