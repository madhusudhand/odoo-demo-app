import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DarkFeatureConfig, DarkFeatureProvider } from "@darkfeature/sdk-react";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feature Flag Demo - @darkfeature/sdk-react",
  description:
    "Explore different types of feature flags with real-world examples using @darkfeature/sdk-react",
  keywords: [
    "feature flags",
    "feature toggles",
    "darkfeature",
    "react",
    "demo",
  ],
};

const darkFeatureConfig: DarkFeatureConfig = {
  apiKey: process.env.NEXT_PUBLIC_DARKFEATURE_API_KEY || "",
  context: {
    userId: "demo-user@example.com",
    email: "demo-user@example.com",
    version: "1.0.0",
    org: "demo-org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkFeatureProvider config={darkFeatureConfig}>
          <Navigation />
          {children}
        </DarkFeatureProvider>
      </body>
    </html>
  );
}
