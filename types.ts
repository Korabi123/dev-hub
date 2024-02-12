import { UserRole } from "@prisma/client";

export type CurrentUserType = {
  role: UserRole | undefined;
  image: string | undefined;
  isOAuth: boolean | undefined;
  isTwoFactorEnabled: boolean | undefined;
  username: string | undefined;
  bio: string | undefined;
  email?: string | null | undefined;
  id: string;
  name: string | null;
} | undefined;