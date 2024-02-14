"use client";

import { useEffect, useState } from "react";
import { SetUsernameModel } from "@/components/modals/set-username-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SetUsernameModel />
    </>
  );
};
