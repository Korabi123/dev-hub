import Navbar from "@/components/navbar";

import { TextTypingEffect } from "@/components/text-typewriter";
import { SpecialButton } from "@/components/special-button";
import { ChevronsLeftRight, Globe } from "lucide-react";
import { CardSpotlight } from "@/components/card-spotlight";
import { currentUser } from "@/lib/auth";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <Navbar />

      <main className="dark:bg-black h-full w-full">
        <Hero user={user} />
        <About />
      </main>

      <Footer />
    </>
  );
}
