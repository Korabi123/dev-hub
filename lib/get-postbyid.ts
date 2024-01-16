import prismadb from "./prismadb";

export const getPostById = async (id: string) => {
  return await prismadb.post.findUnique({
    where: {
      id,
    },
  });
};