export const metadata = {
  title: 'Feed | DevHub',
  description: 'DevHub Personalized Feed',
}

export default function FeedLayout({
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