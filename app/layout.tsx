import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { auth } from "@/auth";

import GoogleAnalytics from "@/components/google/GoogleAnalytics";
import React from "react";
import ClientUsernameModalSetter from "@/components/renderers/ClientUsernameModalSetter";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHub | Where Code meets Community",
  description: "Where Code meets Community",
  openGraph: {
    images: ["https://i.ibb.co/wdH1VS4/Screenshot-2024-02-12-132546.png"],
  },
  metadataBase: new URL(
    "https://i.ibb.co/wdH1VS4/Screenshot-2024-02-12-132546.png"
  ),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  const showUsernameModal =
    session?.user.username === null || session?.user.username === undefined;

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <meta
          name="google-site-verification"
          content="lekmOW1tN9N3gVV3pCGAkjlhp8sa54hIhE1vUkSBIoE"
        />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-6VC7BPJ148" />
        <body className={cn("", inter.className)}>
          {showUsernameModal && <ClientUsernameModalSetter />}
          <ModalProvider />
          <ConfettiProvider />
          <ThemeProvider
            defaultTheme="light"
            attribute="class"
            enableSystem={false}
          >
            {children}
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </SessionProvider>
  );
}
