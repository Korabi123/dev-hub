import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SessionProvider } from 'next-auth/react'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

import { auth } from "@/auth";

import GoogleAnalytics from "@/components/google/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHub | Where Code meets Community",
  description: "Where Code meets Community",
  openGraph: {
    images: ["https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_2ZVFWUYofVLMjK3Joa82FV6hiabn%26teamId%3Dkorabii%26withStatus%3D1&w=640&q=75&dpl=dpl_AayBtKsdccKRB3LcwvLKgnQTGHte"],
  },
  metadataBase: new URL("https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_2ZVFWUYofVLMjK3Joa82FV6hiabn%26teamId%3Dkorabii%26withStatus%3D1&w=640&q=75&dpl=dpl_AayBtKsdccKRB3LcwvLKgnQTGHte")
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <meta name="google-site-verification" content="lekmOW1tN9N3gVV3pCGAkjlhp8sa54hIhE1vUkSBIoE" />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-6VC7BPJ148" />
        <body className={inter.className}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </SessionProvider>
  );
}
