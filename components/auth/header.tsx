import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center">
        <Image src={"/logo-base-256x256.png"} height={40} width={40} alt="logo" />
        <h1 className={cn(
          "text-3xl ml-2 font-semibold",
          font.className,
        )}>
          DevHub
        </h1>
      </div>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  )
}