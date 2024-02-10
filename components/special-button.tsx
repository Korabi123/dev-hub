"use client";

import { useRouter } from "next/navigation";
import { RegisterButton } from "./auth/register-button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface Props {
  mode?: "register" | "feed";
}

export const SpecialButton: React.FC<Props> = ({
  mode = "register",
}) => {
  const router = useRouter();

  if (mode === "register") {
    return (
      <RegisterButton mode="modal" asChild>
        <div className="wrapper flex items-center justify-center">
          <button onClick={() => router.push("/feed")} className="button dark:bg-zinc-300 bg-black text-lg px-6 hover:px-4 transition-all rounded-xl dark:text-black text-white">
            Get Started
            <div className="bubble dark:bg-zinc-300 bg-black dark:text-black text-white">
              <ArrowRightIcon className="h-8 w-8" />
            </div>
          </button>
        </div>

        <svg
          className="absolute hidden"
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="gooey">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                result="gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>
          </defs>
        </svg>
      </RegisterButton>
    );
  } else {
    return (
      <>
        <div className="wrapper flex items-center justify-center">
          <button onClick={() => router.push("/feed")} className="button dark:bg-zinc-300 bg-black text-lg px-6 hover:px-4 transition-all rounded-xl dark:text-black text-white">
            Get Started
            <div className="bubble dark:bg-zinc-300 dark:text-black bg-black text-white">
              <ArrowRightIcon className="h-8 w-8" />
            </div>
          </button>
        </div>

        <svg
          className="absolute hidden"
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="gooey">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                result="gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>
          </defs>
        </svg>
      </>
    );
  }
};
