// import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { auth } from "@/auth";
import { currentUser } from "@/lib/auth";

export async function POST(
  req: Request,
) {
  try {
    const session = await auth();
    const user = await currentUser()
    const body = await req.json();

    const { title, content, imageUrl } = body;

    if (!session) {
      return new NextResponse("Unauthenticated", { status: 401 })
    }

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 401 })
    }

    if (!title) {
      return new NextResponse("Title is Required", { status: 400 })
    }

    if (!content) {
      return new NextResponse("Content is Required", { status: 400 })
    }

    if (!imageUrl) {
      return new NextResponse("ImageUrl is Required", { status: 400 })
    }

    const Post = await prismadb.post.create({
      data: {
        title: title,
        content: content,
        userId: user?.id,
        imageUrl: imageUrl,
      }
    })

    return NextResponse.json(Post);
  } catch (error) {
    console.log("[CREATE_POST_ERROR]", error);
    return new NextResponse('Internal Server error', { status: 500 })
  }
}