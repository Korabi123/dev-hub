"use client";

import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

import { Settings, BookMarked, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import MenuIcon from "./ui/menu-icon";
import { AccountDropdown } from "./account-dropdown";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const routes = [
  {
    name: "My Feed",
    href: "/feed",
    icon: <BookMarked size={17} />,
  },
  {
    name: "Create",
    href: "/create",
    icon: <PlusIcon size={17} />,
  },
];

export const revalidate = 0;

const Sidebar = () => {
  const { user } = useUser();
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      {/* Mobile */}

      <div className="md:hidden flex items-center pt-2 px-4">
        <div className="flex items-center justify-between w-full">
          <Sheet>
            <SheetTrigger>
              <Button className="items-center" variant="outline" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <div className="h-full px-3 py-4 overflow-y-auto">
                <Link href="/">
                  <p className="select-none scroll-m-20 text-3xl font-extrabold tracking-tighter transition-colors first:mt-0">
                    DevHub
                  </p>
                </Link>
                <Separator className="mt-2 mb-6" />
                <ul className="space-y-2 font-medium">
                  <div className="flex w-full justify-between space-x-4 items-center select-none">
                    <Avatar>
                      <AvatarImage
                        src={user.imageUrl}
                        alt={`${user.username}'s profile image`}
                      />
                      <AvatarFallback>
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    <AccountDropdown />
                  </div>
                  <div className="leading-3 select-none">
                    <p className="text-md md:text-lg">{user.fullName}</p>
                    <p className="text-sm md:text-md text-zinc-400">
                      @{user.username}
                    </p>
                  </div>

                  <div className="py-10 space-y-2">
                    {routes.map((route) => (
                      <div key={route.name} className="w-full">
                        <Link href={route.href}>
                          <Button
                            className={cn(
                              "w-full flex items-center justify-start",
                              pathname === route.href ? "bg-muted" : ""
                            )}
                            variant="outline"
                          >
                            {route.icon}
                            <p className="ml-2">{route.name}</p>
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="w-full">
                    {/* <Link href={"/settings"}>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full flex items-center justify-start",
                          pathname === "/settings" ? "bg-muted" : ""
                        )}
                      >
                        <Settings size={15} />
                        <p className="ml-2">Settings</p>
                      </Button>
                    </Link> */}
                  </div>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop */}

      <aside className="fixed top-0 left-0 z-10 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black/50">
          <Link href="/">
            <p className="select-none scroll-m-20 text-3xl font-extrabold tracking-tighter transition-colors first:mt-0">
              DevHub
            </p>
          </Link>
          <Separator className="mt-2 mb-6" />
          <ul className="space-y-2 font-medium">
            <div className="flex w-full justify-between space-x-4 items-center select-none">
              <Avatar>
                <AvatarImage
                  src={user.imageUrl}
                  alt={`${user.username}'s profile image`}
                />
                <AvatarFallback>
                  <Skeleton className="w-[100px] h-[20px] rounded-full" />
                </AvatarFallback>
              </Avatar>
              <AccountDropdown />
            </div>
            <div className="leading-3 select-none">
              <p className="text-md md:text-lg">{user.fullName}</p>
              <p className="text-sm md:text-md text-zinc-400">
                @{user.username}
              </p>
            </div>

            <div className="py-10 space-y-2">
              {routes.map((route) => (
                <div key={route.name} className="w-full">
                  <Link href={route.href}>
                    <Button
                      className={cn(
                        "w-full flex items-center justify-start",
                        pathname === route.href ? "bg-accent" : ""
                      )}
                      variant="outline"
                    >
                      {route.icon}
                      <p className="ml-2">{route.name}</p>
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="w-full">
              {/* <Link href={"/settings"}>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full flex items-center justify-start",
                    pathname === "/settings" ? "bg-muted" : ""
                  )}
                >
                  <Settings size={15} />
                  <p className="ml-2">Settings</p>
                </Button>
              </Link> */}
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
