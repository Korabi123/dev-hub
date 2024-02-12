import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center">
        <Image
          src="/logo-base-256x256.png"
          alt="DevHub Logo"
          width={50}
          height={50}
          className="block dark:hidden"
        />
        <Image
          src="/logo-white-256x256.png"
          alt="DevHub Logo"
          width={50}
          height={50}
          className="dark:block hidden"
        />
        <h1 className={cn("text-3xl ml-2 font-semibold", font.className)}>
          DevHub
        </h1>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
