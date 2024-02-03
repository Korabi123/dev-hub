import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SessionProvider } from 'next-auth/react'
import { Analytics } from "@vercel/analytics/react";

import { auth } from "@/auth";

import GoogleAnalytics from "@/components/google/GoogleAnalytics";
import GoogleTagManager from "@/components/google/GoogleTagManager";
import GoogleTagManagerNoScript from "@/components/google/GoogleTagManagerNoScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHub | Where Code meets Community",
  description: "Where Code meets Community",
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
        {/* <GoogleTagManager /> */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-6VC7BPJ148" />
        <body className={inter.className}>
          <GoogleTagManagerNoScript />
          {children}
          <Analytics />
        </body>
      </html>
    </SessionProvider>
  );
}
