import prismadb from "@/lib/prismadb"

export const getPostById = async (id: string) => {
  const post = await prismadb.post.findUnique({
    where: {
      id
    }
  })

  if (!post) {
    return { error: "No post found." }
  }

  return { success: post }
}