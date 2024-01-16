"use server";

import prismadb from "@/lib/prismadb";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" }
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" }
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" }
  }

  await prismadb.user.update({
    where: {
      id: existingUser.id
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    }
  });

  await prismadb.verificationToken.delete({
    where: {
      id: existingToken.id
    }
  });

  return { success: "Email verified!" };
}