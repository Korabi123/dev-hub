import Sidebar from "@/components/sidebar"

export const metadata = {
  title: 'Edit Profile | DevHub',
  description: 'Edit DevHub Profile',
}

export default function EditLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}