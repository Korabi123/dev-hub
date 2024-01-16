"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ShareButtons from "./share-buttons";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState } from "react";

interface Props {
  data: {
    title: string;
    content: string;
    id: string;
    imageUrl: string;
  };
}

const ShareDrawer: React.FC<Props> = ({ data }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full">Share</Button>
      </DrawerTrigger>
      <DrawerContent className="w-full pb-2">
        <DrawerHeader>
          <DrawerTitle className="text-start">Share This Post</DrawerTitle>
          <DrawerDescription className="text-start">
            Anyone with the post link will be able to view this post.
          </DrawerDescription>
        </DrawerHeader>
        <br />
        <div className="w-full items-center justify-center px-4">
          <h2>Social media</h2>
          <Separator />
          <div className="flex gap-2 mt-4">
            <ShareButtons
              urlFacebook={`${window.location}/${data.id}`}
              urlReddit={`${window.location}/${data.id}`}
            />
          </div>
          <br />
          <h2>Link</h2>
          <Input defaultValue={`${window.location}/${data.id}`} readOnly />
          <Button
            onClick={() => {
              navigator.clipboard.writeText(`${window.location}/${data.id}`);
              setIsCopied(true);
            }}
            size="sm"
            className="mt-3 w-full"
          >
            {!isCopied ? <Copy size={20} /> : "Copied!"}
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ShareDrawer;
