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
import { cn } from "@/lib/utils"
import { Button } from "./ui/button";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ShareDialog from "./share-dialog";
import ShareDrawer from "./share-drawer";

interface PostCardProps {
  className?: string;
  data: {
    title: string;
    content: string;
    id: string;
    imageUrl: string;
  }
  username: string;
  onClick?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  className,
  data,
  username,
  onClick
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) return null

  return (
    <Card onClick={onClick} className={cn("w-[350px] select-none", className)}>
        <CardHeader>
          <CardTitle className="font-bold tracking-tight">{data.title}</CardTitle>
          <CardDescription>by @{username}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video relative">
          <Image 
            src={data.imageUrl}
            fill
            alt="Post Image"
            className="rounded-lg"
            />
          </div>
        </CardContent>

        <CardFooter className="grid grid-cols-2 gap-4">
          <Button variant={"outline"} onClick={() => router.push(`/feed/${data.id}`)}>Read More</Button>
          {isDesktop ? <ShareDialog data={data} /> : <ShareDrawer data={data} />}
        </CardFooter>
    </Card>
  )
}