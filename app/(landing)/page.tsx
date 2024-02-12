import Navbar from "@/components/navbar";

import { TextTypingEffect } from "@/components/text-typewriter";
import { ButtonFlickeringLight } from "@/components/special-button";
import { ChevronsLeftRight, Globe } from "lucide-react";
import { CardSpotlight } from "@/components/card-spotlight";
import { currentUser } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";
import { WavyBackground } from "@/components/wavy-background";

export default async function Home() {
  const user = await currentUser();

  const priorities = [
    {
      title: "Share with the world",
      description:
        "Turn your posts to valuable resources. Share your knowlege to the world",
      icon: <Globe className="h-6 w-6 text-center" />,
      id: 1,
    },
    {
      title: "Developer Profiles",
      description:
        "Comprehensive profiles showcasing skills, projects, and contributions.",
      icon: <ChevronsLeftRight className="h-6 w-6 text-center" />,
      id: 2,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="justify-center px-6 pb-32 relative">
        {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute lg:block hidden bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#d5c5ff,transparent)]"></div>
        </div> */}
        {/* <section className="mt-20" id="landing">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-6xl">
              Your Ultimate
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-6xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text animate-gradient">
              Dev Connection.
            </h1>
            <p className="leading-7 md:text-xl [&:not(:first-child)]:mt-6">
              <TextTypingEffect />
            </p>
            <div className="mt-10">
              <ButtonFlickeringLight mode={!user ? "register" : "feed"} />
            </div>
          </div>
        </section> */}

        <div className="h-full dark:hidden block justify-center mt-14">
          <WavyBackground className="max-w-4xl mx-auto pb-36">
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-700 via-gray-900 to-black text-center ">
              Your Ultimate <br /> Dev Connection.
            </h1>
            <div className="mt-4 font-normal md:text-lg text-sm text-neutral-300 max-w-lg text-center mx-auto">
              <TextTypingEffect />
              <div className="mt-10">
                <ButtonFlickeringLight mode={!user ? "register" : "feed"} />
              </div>
            </div>
          </WavyBackground>
        </div>

        <section id="about" className="mt-36 xl:px-96 lg:px-60">
          <div className="text-center">
            <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight first:mt-0">
              What we offer
            </h2>
            <p className="leading-7 text-xl [&:not(:first-child)]:mt-3 text-zinc-400">
              List of features we offer and our priorities.
            </p>
            <div className="grid mt-20 place-items-center gap-x-10 lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
              {priorities.map((priority) => (
                <CardSpotlight
                  title={priority.title}
                  icon={priority.icon}
                  description={priority.description}
                  key={priority.id}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
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
            />
          </div>
          <div className="flex flex-col gap-2 text-sm md:items-center md:gap-4 md:order-1 md:text-base lg:order-0">
            <p className="text-gray-500 dark:text-gray-400">
              © 2024 DevHub Inc.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
