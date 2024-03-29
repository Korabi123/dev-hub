import * as z from "zod";

export const SettingsSchema = z
  .object({
    isTwoFactorEnabled: z.optional(z.boolean()),
    email: z.optional(z.string().email()),
    password: z.optional(
      z.string().min(1, {
        message: "The current password is needed to reset the password",
      })
    ),
    newPassword: z.optional(
      z
        .string()
        .min(8, {
          message: "Password must be at least 8 characters",
        })
        .regex(
          new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%&]).{8,32}"),
          {
            message:
              "Password must contain one uppercase letter, one lowercase letter, one number and one of the following characters: * . ! @ $ % &",
          }
        )
    ),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .regex(
      new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%&]).{8,32}"),
      {
        message:
          "Password must contain one uppercase letter, one lowercase letter, one number and one of the following characters: * . ! @ $ % &",
      }
    ),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(
    z
      .string()
      .min(1, { message: "Code is required" })
      .max(6, { message: "Code cannot be longer than six chracters" })
  ),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .regex(
      new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%&]).{8,32}"),
      {
        message:
          "Password must contain one uppercase letter, one lowercase letter, one number and one of the following characters: * . ! @ $ % &",
      }
    ),
  name: z.string().min(3, {
    message: "Name is required",
  }),
  username: z.string().min(1, {
    message: "Username is required",
  }).max(15, {
    message: "Username cannot be longer than 15 characters",
  }).regex(
    new RegExp("^[A-Za-z][A-Za-z0-9_]{3,8}$"),
    {
      message: "Username must start with a letter and can only contain letters, numbers and underscores",
    }
  )
});


export const ProfileEditSchema = z.object({
  name: z.optional(z.string().max(50, {
    message: "Name cannot be longer than 50 characters",
  })),
  username: z.optional(z.string().max(15, {
    message: "Username cannot be longer than 15 characters",
  }).regex(
    new RegExp("^[A-Za-z][A-Za-z0-9_]{3,8}$"),
    {
      message: "Username must start with a letter and can only contain letters, numbers and underscores",
    },
  )),
  bio: z.optional(z.string().max(200, {
    message: "Bio cannot be longer than 200 characters",
  })),
});

export const UsernameSetSchema = z.object({
    username: z.string().max(15, {
        message: "Username cannot be longer than 15 characters",
    }).regex(
        new RegExp("^[A-Za-z][A-Za-z0-9_]*$"),
        {
            message: "Username must start with a letter and can only contain letters, numbers and underscores",
        },
    ),
});

export const UsernameSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }).max(15, { message: "Username cannot be longer than 15 characters" }).regex(
    new RegExp("^[A-Za-z][A-Za-z0-9_]{3,8}$"),
    {
      message: "Username must start with a letter and can only contain letters, numbers and underscores",
    },
  ),
})

export const PictureEditSchema = z.object({
  image: z.optional(z.string().url()),
})