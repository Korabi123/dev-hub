"use client";

import Link from "next/link";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Skeleton} from "@/components/ui/skeleton";

import {Settings, BookMarked, PlusIcon, MenuIcon} from "lucide-react";
import {useEffect, useState} from "react";
import {AccountDropdown} from "./account-dropdown";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {Separator} from "./ui/separator";
import {useCurrentUser} from "@/hooks/use-current-user";
import {FaUser} from "react-icons/fa";

const routes = [
    {
        name: "My Feed",
        href: "/feed",
        icon: <BookMarked size={17}/>,
    },
    {
        name: "Create",
        href: "/create",
        icon: <PlusIcon size={17}/>,
    },
];

const Sidebar = () => {
    const user = useCurrentUser()
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

    let usernameElementMobile;
    if (user?.username === null || user?.username === undefined) {
        usernameElementMobile = <Skeleton className="h-4 w-[250px]" />;
    } else {
        usernameElementMobile = <p className="text-sm md:text-md text-zinc-400">@{user.username}</p>;
    }

    let usernameElementDesktop;
    if (user?.username === null || user?.username === undefined) {
        usernameElementDesktop = <Skeleton className="h-4 w-[250px]" />;
    } else {
        usernameElementDesktop = <p className="text-sm md:text-md text-zinc-400">@{user.username}</p>;
    }

    return (
        <>
            {/* Mobile */}
            <div className="md:hidden flex items-center pt-2 px-4">
                <div className="flex items-center justify-between w-full">
                    <Sheet>
                        <SheetTrigger>
                            <Button className="items-center" variant="outline" size="icon">
                                <MenuIcon/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="flex flex-col h-full py-4 overflow-y-auto">
                                <div className="flex-grow overflow-y-auto">
                                    <Link href="/">
                                        <p className="select-none scroll-m-20 text-3xl font-extrabold tracking-tighter transition-colors first:mt-0">
                                            DevHub
                                        </p>
                                    </Link>
                                    <Separator className="mt-2 mb-6"/>
                                    <ul className="space-y-2 font-medium">
                                        <div className="flex w-full justify-between space-x-4 items-center select-none">
                                            <Avatar>
                                                <AvatarImage
                                                    src={user.image}
                                                    alt={`${user.username}'s profile image`}
                                                />
                                                <AvatarFallback
                                                    className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white">
                                                    <FaUser/>
                                                </AvatarFallback>
                                            </Avatar>
                                            <AccountDropdown/>
                                        </div>
                                        <div className="leading-3 select-none">
                                            <p className="text-md md:text-lg">{user.name}</p>
                                            {usernameElementMobile}
                                            <Skeleton className="h-4 w-[250px]" />
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
                                    </ul>
                                </div>
                                <div className="w-full">
                                    <Link href={"/settings"}>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full flex items-center justify-start",
                                                pathname === "/settings" ? "bg-muted" : ""
                                            )}
                                        >
                                            <Settings size={15}/>
                                            <p className="ml-2">Settings</p>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Desktop */}
            <aside
                className="fixed top-0 left-0 z-10 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0">
                <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black/50">
                    <div className="flex-grow overflow-y-auto">
                        <Link href="/">
                            <p className="select-none scroll-m-20 text-3xl font-extrabold tracking-tighter transition-colors first:mt-0">
                                DevHub
                            </p>
                        </Link>
                        <Separator className="mt-2 mb-6"/>
                        <ul className="space-y-2 font-medium">
                            <div className="flex w-full justify-between space-x-4 items-center select-none">
                                <Avatar>
                                    <AvatarImage
                                        src={user.image}
                                        alt={`${user.username}'s profile image`}
                                    />
                                    <AvatarFallback
                                        className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white">
                                        <FaUser/>
                                    </AvatarFallback>
                                </Avatar>
                                <AccountDropdown/>
                            </div>
                            <div className="leading-3 select-none">
                                <p className="text-md md:text-lg">{user.name}</p>
                                {usernameElementDesktop}
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
                        </ul>
                    </div>
                    <div className="w-full mb-4">
                        <Link href={"/settings"}>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full flex items-center justify-start",
                                    pathname === "/settings" ? "bg-muted" : ""
                                )}
                            >
                                <Settings size={15}/>
                                <p className="ml-2">Settings</p>
                            </Button>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
