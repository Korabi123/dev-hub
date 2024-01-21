"use server";

import * as z from "zod";

import prismadb from "@/lib/prismadb";
import { PictureEditSchema } from "@/schemas";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const updatePicture = async (values: z.infer<typeof PictureEditSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const prismadbUser = await getUserById(user.id);

  if (!prismadbUser) {
    return { error: "User not found!" };
  };

  await prismadb.user.update({
    where: { id: user.id },
    data: {
      ...values,
    }
  });

  return { success: "Profile picture succesfully updated!" }
}