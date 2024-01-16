import prismadb from "@/lib/prismadb";

export const getTwoFactorConfirmationByUserId = async (userId: string) => { 
  try {
    const twoFactorConfirmation = await prismadb.twoFactorConfirmation.findUnique({
      where: { userId }
    })

    return twoFactorConfirmation;
  } catch {
    return null;
  }
}