import prismadb from "@/lib/prismadb"

export const fetchPosts = async () => {
  const posts = await prismadb.post.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  if (!posts) {
    return { error: "No posts found." }
  }
  
  return { success: posts };
}