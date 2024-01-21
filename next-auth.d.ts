import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  image: string;
  isOAuth: boolean;
  isTwoFactorEnabled: boolean;
  username: string;
  bio: string;
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}