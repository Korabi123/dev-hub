"use server";

import * as z from "zod";

import prismadb from "@/lib/prismadb";
import { ProfileEditSchema } from "@/schemas";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const updateUser = async (values: z.infer<typeof ProfileEditSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const prismadbUser = await getUserById(user.id);

  if (!prismadbUser) {
    return { error: "Unauthorized!" }
  };

  await prismadb.user.update({
    where: { id: user.id },
    data: {
      ...values
    }
  })

  return { success: "User Succesfully Updated!" }
}