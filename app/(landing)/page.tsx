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
              Your <em className="italic relative inline-flex justify-center items-center text-zinc-900"> Ultimate
              <svg className="absolute fill-zinc-300 w-[calc(100%+1rem)] -z-10" xmlns="http://www.w3.org/2000/svg" width="223" height="62" viewBox="0 0 223 62" aria-hidden="true" preserveAspectRatio="none">
                <path d="M45.654 53.62c17.666 3.154 35.622 4.512 53.558 4.837 17.94.288 35.91-.468 53.702-2.54 8.89-1.062 17.742-2.442 26.455-4.352 8.684-1.945 17.338-4.3 25.303-7.905 3.94-1.81 7.79-3.962 10.634-6.777 1.38-1.41 2.424-2.994 2.758-4.561.358-1.563-.078-3.143-1.046-4.677-.986-1.524-2.43-2.96-4.114-4.175a37.926 37.926 0 0 0-5.422-3.32c-3.84-1.977-7.958-3.563-12.156-4.933-8.42-2.707-17.148-4.653-25.95-6.145-8.802-1.52-17.702-2.56-26.622-3.333-17.852-1.49-35.826-1.776-53.739-.978-8.953.433-17.898 1.125-26.79 2.22-8.887 1.095-17.738 2.541-26.428 4.616-4.342 1.037-8.648 2.226-12.853 3.676-4.197 1.455-8.314 3.16-12.104 5.363-1.862 1.13-3.706 2.333-5.218 3.829-1.52 1.47-2.79 3.193-3.285 5.113-.528 1.912-.127 3.965.951 5.743 1.07 1.785 2.632 3.335 4.348 4.68 2.135 1.652 3.2 2.672 2.986 3.083-.18.362-1.674.114-4.08-1.638-1.863-1.387-3.63-3.014-4.95-5.09C.94 35.316.424 34.148.171 32.89c-.275-1.253-.198-2.579.069-3.822.588-2.515 2.098-4.582 3.76-6.276 1.673-1.724 3.612-3.053 5.57-4.303 3.96-2.426 8.177-4.278 12.457-5.868 4.287-1.584 8.654-2.89 13.054-4.036 8.801-2.292 17.74-3.925 26.716-5.19C70.777 2.131 79.805 1.286 88.846.723c18.087-1.065 36.236-.974 54.325.397 9.041.717 18.07 1.714 27.042 3.225 8.972 1.485 17.895 3.444 26.649 6.253 4.37 1.426 8.697 3.083 12.878 5.243a42.11 42.11 0 0 1 6.094 3.762c1.954 1.44 3.823 3.2 5.283 5.485a12.515 12.515 0 0 1 1.63 3.88c.164.706.184 1.463.253 2.193-.063.73-.094 1.485-.247 2.195-.652 2.886-2.325 5.141-4.09 6.934-3.635 3.533-7.853 5.751-12.083 7.688-8.519 3.778-17.394 6.09-26.296 7.998-8.917 1.86-17.913 3.152-26.928 4.104-18.039 1.851-36.17 2.295-54.239 1.622-18.062-.713-36.112-2.535-53.824-6.23-5.941-1.31-5.217-2.91.361-1.852" />
              </svg>
            </em> <br /> Dev Connection.
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
