import React from "react";
import { Spotlight } from "@/components/spotlight";
import { TextTypingEffect } from "./text-typewriter";
import { SpecialButton } from "./special-button";
import { WavyBackground } from "./wavy-background";

interface HeroProps {
  user: any;
}


export const Hero = ({ user }: HeroProps) => {
  return (
    <>
      {/* Dark */}
      <div className="dark:flex hidden h-full w-full rounded-md items-center justify-center bg-black/[0.96] antialiased relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="max-w-7xl z-10 h-[100vh] flex flex-col items-center justify-center">
          
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Your Ultimate <br /> Dev Connection.
          </h1>
          <div className="mt-4 font-normal md:text-lg text-sm text-neutral-300 max-w-lg text-center mx-auto">
            <TextTypingEffect />
            <div className="mt-10">
              <SpecialButton mode={!user ? "register" : "feed"} />
            </div>
          </div>
        </div>
      </div>

      {/* Light */}
      <div className="h-full dark:hidden block justify-center mt-14">
        <WavyBackground className="max-w-4xl mx-auto pb-36">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-700 via-gray-900 to-black text-center ">
            Your Ultimate <br /> Dev Connection.
          </h1>
          <div className="mt-4 font-normal md:text-lg text-sm text-neutral-300 max-w-lg text-center mx-auto">
            <TextTypingEffect />
            <div className="mt-10">
              <SpecialButton mode={!user ? "register" : "feed"} />
            </div>
          </div>
        </WavyBackground>
      </div>
    </>
  );
}
