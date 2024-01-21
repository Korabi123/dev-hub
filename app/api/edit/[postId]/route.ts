
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { currentUser } from "@/lib/auth";
import { auth } from "@/auth";

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const session = await auth();
    const user = await currentUser();
    const body = await req.json();

    const { title, content, imageUrl } = body;

    if (!session) {
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

    const Post = await prismadb.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: title,
        content: content,
        userId: user?.id,
        imageUrl: imageUrl,
      }
    })

    return NextResponse.json(Post);
  } catch (error) {
    console.log("[EDIT_POST_ERROR]", error);
    return new NextResponse('Internal Server error', { status: 500 })
  }
}