"use client";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import { Edit } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import ShareDrawer from "@/components/share-drawer";
import ShareDialog from "@/components/share-dialog";
import useMediaQuery from "@/hooks/useMediaQuery";

interface PostCardProps {
  className?: string;
  data: {
    title: string;
    content: string;
    id: string;
    userId: string;
    imageUrl: string;
  };
  authorImage: string;
  username: string;
  onClick?: () => void;
  logedInId: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  className,
  data,
  username,
  onClick,
  authorImage,
  logedInId,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex py-20 items-center justify-center">
      <Card
        onClick={onClick}
        className={cn("lg:w-[650px] sm:w-[500px] w-full select-none", className)}
      >
        <CardHeader>
          <CardTitle className="font-bold tracking-tight">
            {data.title}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <CardDescription>
              <div className="mt-4 flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src={authorImage} />
                </Avatar>
                @{username}
                <Link href={`/profile/${data.userId}`} className="ml-4">
                  <p className="hover:underline text-zinc-400 transition">
                    View Profile
                  </p>
                </Link>
              </div>
              {logedInId === data.userId ? <Button variant='outline' className="mt-4 items-center" onClick={() => router.push(`/feed/${data.id}/edit`)}><Edit className="h-4 w-4" /> <span className="ml-2">Edit Post</span></Button> : null}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
            {data.content}
          </p>
          <div className="mt-4 relative aspect-video rounded-lg overflow-hidden bg-cover">
            <Image
              src={data.imageUrl}
              fill
              alt="Post Image"
              className="rounded-lg"
            />
          </div>
        </CardContent>

        <CardFooter className="w-full">
          {isDesktop ? <ShareDialog data={data} /> : <ShareDrawer data={data} />}
        </CardFooter>
      </Card>
    </div>
  );
};
