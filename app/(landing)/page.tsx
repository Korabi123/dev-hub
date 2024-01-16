import Navbar from "@/components/navbar";

import { TextTypingEffect } from "@/components/text-typewriter";
import { ButtonFlickeringLight } from "@/components/special-button";
import { ChevronsLeftRight, Globe } from "lucide-react";
import { CardSpotlight } from "@/components/card-spotlight";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

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

      <main className="justify-center px-6 py-32 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute lg:block hidden bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#d5c5ff,transparent)]"></div>
        </div>
        <section className="mt-20" id="landing">
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
              <ButtonFlickeringLight userId={userId!} />
            </div>
          </div>
        </section>

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
      <footer className="bg-white border-t">
        <div className="mx-auto py-10">
          <p className="text-center text-xs text-black">
            &copy; 2023 DevHub, All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
