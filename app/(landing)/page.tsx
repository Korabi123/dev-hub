import Navbar from "@/components/navbar";
import { currentUser } from "@/lib/auth";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <Navbar />

      <main className="h-full w-full">
        <Hero user={user} />
        <About />
      </main>

      <Footer />
    </>
  );
}
