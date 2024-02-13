// import { auth, clerkClient, useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {Edit, Frown, PlusIcon, Settings} from "lucide-react";
import Link from "next/link";
import prismadb from "@/lib/prismadb";
import { PostCard } from "./post-card";
import { FaUser } from "react-icons/fa";
import { currentUser } from "@/lib/auth";
import { CgProfile } from "react-icons/cg";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const ProfileCard = async () => {
  const user = await currentUser();

  const latestPostsByUser = await prismadb.post.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex py-20 items-center justify-center">
      <Card className="lg:w-[800px] md:w-[500px] w-full select-none">
        <CardHeader>
          <div className="font-bold tracking-tight">
            <div className="flex w-full justify-between">
              <Avatar className="lg:h-40 lg:w-40 h-20 w-20">
                <AvatarImage
                  src={user?.image}
                  alt={`${user?.username}'s profile image`}
                />
                <AvatarFallback className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white">
                  <FaUser className="lg:w-20 lg:h-20 h-10 w-10" />
                </AvatarFallback>
              </Avatar>
              <div className="md:block hidden">
                <div className="flex justify-end space-x-4">
                  <div>
                    <div className="flex justify-end space-x-4">
                      {user?.name && (
                        <div className="flex space-x-4">
                          <p className="scroll-m-20 text-4xl font-extrabold tracking-tight text-end lg:text-5xl">
                            {user?.name}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end">
                      {user?.username && (
                        <p className="scroll-m-20 text-2xl font-medium text-start text-zinc-400 tracking-tight">
                          @{user?.username}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/profile/edit">
                    <Button variant={"outline"} className="mt-4 w-full">
                      <Edit size={15} />{" "}
                      <span className="ml-2">Edit Profile</span>
                    </Button>
                  </Link>
                  <Link href="/profile/edit/picture">
                    <Button variant={"outline"} className="mt-4 w-full">
                      <CgProfile size={15} />{" "}
                      <span className="ml-2">Change Picture</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:hidden block">
              <div className="mt-4">
                {user?.name && (
                  <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {user?.name}
                  </p>
                )}
                {user?.username && (
                  <p className="scroll-m-20 text-lg font-medium text-zinc-400 tracking-tight">
                    @{user?.username}
                  </p>
                )}
                <div className="grid grid-cols-2 gap-2 md:hidden">
                  <Link href="/profile/edit">
                    <Button variant={"outline"} className="mt-4 w-full">
                      <Edit size={15} />{" "}
                      <span className="ml-2">Edit Profile</span>
                    </Button>
                  </Link>
                  <Link href="/profile/edit/picture">
                    <Button variant={"outline"} className="mt-4 w-full">
                      <CgProfile size={15} />{" "}
                      <span className="ml-2">Change Picture</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-8 scroll-m-20 text-muted-foreground md:text-lg text-sm tracking-tight text-black">
              {user?.bio}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Posts
          </p>
          <Separator className="mt-2 mb-6" />
          <div>
            {latestPostsByUser.length === 0 && (
                <div className="text-center">
                  <Frown className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-semibold text-gray-900">No Posts</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by creating your first post.</p>
                  <div className="mt-6">
                    <Link href="/create">
                      <Link href={"/create"}>
                        <Button
                            variant={"default"}
                            className={cn(
                                "inline-flex items-center",
                            )}
                        >
                          <PlusIcon size={15}/>
                          <p className="ml-2">Create</p>
                        </Button>
                      </Link>
                    </Link>
                  </div>
                </div>
            )}
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 place-items-center justify-center">
            {latestPostsByUser.map((post) => (
                <PostCard
                    className="mb-4"
                    key={post.id}
                    data={post}
                    username={user?.username as string}
                />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
