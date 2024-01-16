import prismadb from "@/lib/prismadb";

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await prismadb.account.findFirst({
      where: {
        userId
      }
    });

    return account;
  } catch (error) {
    return null;
  }
}