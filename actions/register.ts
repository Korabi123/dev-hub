"use server";

import prismadb from "@/lib/prismadb";

import bcrypt from "bcryptjs";
import * as z from "zod";

import { generateVerificationToken } from "@/lib/tokens";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail, getUserByUsername } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { email, password, name, username } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email is already taken" };
  }

  const existingUsername = await getUserByUsername(username);

  if (existingUsername) {
    return { error: "Username is already taken" }; 
  }

  await prismadb.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      username,
    }
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token, name);

  return { success: "Confirmation email sent!" };
}