import Link from "next/link";

import { currentUser } from "@/lib/auth";
import { ThemeSwitch } from "./theme-switch";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <header className="fixed inset-x-0 top-0 z-30 w-full border-b bg-transparent backdrop-blur-md">
      <div className="py-4 flex px-20 justify-between">
        <div>
          <Link href="/">
            <h1 className="tracking-tighter font-bold text-3xl">DevHub</h1>
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Navbar;
