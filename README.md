# DevHub - Ultimate Dev Connection (2024)

This is the new repository for DevHub (2024)

Once finished this Project will have the following Key Features:

- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🤔 Profile customization
- 📝 Create & Edit posts
- 🛫 Share Posts
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page

## For the env file use this template:
```env
# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings
DATABASE_URL=""
DIRECT_URL=""

# NextAuth
AUTH_SECRET=""
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Next Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""

# Resend Mail
RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=""
```
