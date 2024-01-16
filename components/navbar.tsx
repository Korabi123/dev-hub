import Link from "next/link";

import { NavButton } from "./navbar-button";

const Navbar = async () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 w-full bg-transparent backdrop-blur-md">
      <div className="py-4 flex xl:px-96 lg:px-60 md:px-36 px-4 justify-between">
        <div>
          <Link href="/">
            <h1 className="tracking-tighter font-bold text-3xl">DevHub</h1>
          </Link>
        </div>
        <div>
          <NavButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
