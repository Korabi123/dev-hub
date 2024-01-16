"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import prismadb from "@/lib/prismadb";
import { SettingsSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const settings = async (
  values: z.infer<typeof SettingsSchema>
) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const prismadbUser = await getUserById(user.id);

  if (!prismadbUser) {
    return { error: "Unauthorized!" }
  };

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: "Email is already taken!" };
    };

    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(verificationToken.token, verificationToken.email, existingUser?.name!);

    return { success: "Verification email sent!" };
  };

  if (values.password && values.password && prismadbUser.password) {
    const passwordsMatch = await bcrypt.compare(values.password, prismadbUser.password);

    if (!passwordsMatch) {
      return { error: "Current password is incorrect!" };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword!, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  await prismadb.user.update({
    where: { id: prismadbUser.id },
    data: {
      ...values
    }
  });

  return { success: "Settings updated!" };
}