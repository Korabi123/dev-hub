
# DevHub - Ultimate Dev Connection (2024)


![Logo](https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_2ZVFWUYofVLMjK3Joa82FV6hiabn%26teamId%3Dkorabii%26withStatus%3D1&w=640&q=75&dpl=dpl_AayBtKsdccKRB3LcwvLKgnQTGHte)


## Features

- 🤔 Profile customization ( Name, username, bio, & profile picture )
- 📝 Create & Edit posts
- 🖇️ Share Posts
- ✍️ Markdown formatting for posts
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📧 Change email with new verification in Settings page
- ⚙️ Account settings ( Change email, password & add 2FA )
## Tech Stack Used

- 🚀 Next.js 14 with server actions & typescript
- 💽 NeonDB as the database
- 🔒 Authentication system using NextAuth v5,
- 📨 E-mail sending for confirmations using Nodemailer,
- 🎉 Tailwindcss in combination with shadcn/ui for styling
- 🪄 Prisma as the ORM
- 🔨 Zod for form validation
## Environment Variables

If you want to run this project locally, you will need to add the following environment variables to your .env file

```env
DATABASE_URL=""
DIRECT_URL=""

AUTH_SECRET=""
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""

GMAIL_EMAIL=
GMAIL_PASSWORD=

NEXT_PUBLIC_APP_URL=""
```


## Authors

- [@Korabi123](https://www.github.com/Korabi123)
