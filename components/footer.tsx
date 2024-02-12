"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Footer = () => {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="w-full border-t justify-center">
      <div className="container flex flex-col py-4 gap-4 px-4 items-center justify-center text-center md:flex-row md:gap-6 md:px-6 lg:py-8 xl:max-w-6xl xl:gap-8 xl:justify-between">
        <div className="flex flex-col gap-2 text-sm md:items-center md:gap-4 md:order-1 md:text-base lg:order-0">
          <Link
            className="font-semibold underline hover:none"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
          <Link className="underline hover:none" href="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4 md:order-0">
          <Link className="text-2xl font-bold sr-only" href="/">
            DevHub
          </Link>
          <Image
            src="/logo-base-1200x1200.png"
            alt="DevHub Logo"
            width={50}
            height={50}
            className="block dark:hidden"
          />
          <Image
            src="/logo-white-1200x1200.png"
            alt="DevHub Logo"
            width={50}
            height={50}
            className="dark:block hidden"
          />
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-center md:gap-4 md:order-1 md:text-base lg:order-0">
          <p className="text-gray-500 dark:text-gray-400">© 2024 DevHub Inc.</p>
        </div>
      </div>
    </footer>
  );
};
