"use client";

import Sidebar from "@/components/sidebar"
import { useEffect, useState } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!isMounted) return null; // Don't render anything until the component is mounted. This prevents any flashing or blank screen.

  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}