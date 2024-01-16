import { auth, clerkClient, useUser } from "@clerk/nextjs";

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
import { Skeleton } from "@/components/ui/skeleton";

import { Edit } from "lucide-react";
import Link from "next/link";
import prismadb from "@/lib/prismadb";
import { PostCard } from "./post-card";

const ProfileCard = async () => {
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId as string);

  const latestPostsByUser = await prismadb.post.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex py-20 items-center justify-center">
      <Card className="lg:w-[800px] md:w-[500px] w-full select-none">
        <CardHeader>
          <CardTitle className="font-bold tracking-tight">
            <div className="flex w-full justify-between">
              <Avatar className="lg:h-40 lg:w-40 h-20 w-20">
                <AvatarImage
                  src={user.imageUrl}
                  alt={`${user.username}'s profile image`}
                />
                <AvatarFallback>
                  <Skeleton className="lg:h-40 lg:w-40 w-20 h-20 rounded-full" />
                </AvatarFallback>
              </Avatar>
              <div>
                {user?.firstName && (
                  <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {user?.firstName + " " + user?.lastName}
                  </p>
                )}
                {!user?.firstName && null}
                <p className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-zinc-400">
                  @{user.username}
                </p>
                <Link href="/profile/edit">
                  <Button variant={"outline"} className="mt-4">
                    <Edit size={15} />{" "}
                    <span className="ml-2">Edit Profile</span>
                  </Button>
                </Link>
              </div>
            </div>
          </CardTitle>
          <CardDescription>
            <p className="mt-8 scroll-m-20 md:text-2xl text-lg tracking-tight text-black">
              {/* @ts-ignore */}
              {user.unsafeMetadata.bio}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Posts
          </p>
          <Separator className="mt-2 mb-6" />
          <div>
            {latestPostsByUser.length === 0 && (
              <p className="text-lg text-zinc-400">No posts.</p>
            )}
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 place-items-center justify-center">
            {latestPostsByUser.map((post) => (
              <PostCard
                className="mb-4"
                key={post.id}
                data={post}
                username={user.username as string}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
