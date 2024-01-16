import prismadb from "@/lib/prismadb";

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFactorToken = await prismadb.twoFactorToken.findUnique({
      where: { token }
    });

    return twoFactorToken;
  } catch {
    return null;
  }
}

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await prismadb.twoFactorToken.findFirst({
      where: { email }
    });

    return twoFactorToken;
  } catch {
    return null;
  }
}