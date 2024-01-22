"use client";

import Image from "next/image";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ShareDrawer from "@/components/share-drawer";
import ShareDialog from "@/components/share-dialog";
import useMediaQuery from "@/hooks/useMediaQuery";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { User } from "@prisma/client";

interface PostCardProps {
  className?: string;
  data: {
    title: string;
    id: string;
    userId: string;
    imageUrl: string;
  };
  authorImage: string;
  username: string;
  onClick?: () => void;
  logedInId: string;
  user: User;
  children: React.ReactNode;
}

export const PostCard: React.FC<PostCardProps> = ({
  className,
  data,
  username,
  onClick,
  authorImage,
  logedInId,
  user,
  children,
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const router = useRouter();

  return (
    <div className="flex py-20 items-center justify-center">
      <Card
        onClick={onClick}
        className={cn("lg:w-[800px] sm:w-[500px] w-full select-none", className)}
      >
        <CardHeader>
          <CardTitle className="text-4xl tracking-tight">
            {data.title}
          </CardTitle>
          <div className="flex items-center">
            <div className="text-muted-foreground text-sm">
              <div className="flex items-center space-x-2">
                <p className="ml-2">by</p>
                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button className="px-0" onClick={() => router.push(`/profile/${username}`)} variant={"link"}>@{username}</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src={`${authorImage}`} />
                          <AvatarFallback className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white">
                            <FaUser />
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">
                            @{username}
                          </h4>
                          <div className="w-1/3 text-wrap">
                            <p className="text-xs select-none truncate">
                              {user.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              {logedInId === data.userId ? <Button variant='outline' className="my-4 items-center" onClick={() => router.push(`/feed/${data.id}/edit`)}><Edit className="h-4 w-4" /> <span className="ml-2">Edit Post</span></Button> : null}
            </div>
          </div>
          <div className="py-12 relative aspect-[2/1] rounded-lg overflow-hidden bg-cover">
            <Image
              src={data.imageUrl}
              fill
              alt="Post Image"
              className="rounded-lg"
            />
          </div>
        </CardHeader>
        <CardContent>
          {children}

        </CardContent>

        <CardFooter className="w-full">
          {isDesktop ? <ShareDialog data={data} /> : <ShareDrawer data={data} />}
        </CardFooter>
      </Card>
    </div>
  );
};
