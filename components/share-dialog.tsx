"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  }
}

const ShareDialog: React.FC<Props> = ({ data }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full">Share</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share This Post</DialogTitle>
          <DialogDescription>
            Anyone with the post link will be able to view this post.
          </DialogDescription>
        </DialogHeader>
        <br />
        <h2>Social media</h2>
        <Separator />
        <div className="flex gap-2">
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
          className="px-3"
        >
          {!isCopied ? <Copy size={20} /> : "Copied!"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;