"use client";
import React from "react";
import { useModal } from "@/hooks/use-modal-store";
import { useCurrentUser } from "@/hooks/use-current-user";

function ClientUsernameModalSetter() {
  const { onOpen } = useModal();

  const user = useCurrentUser();

  React.useEffect(() => {
    if (user) {
      onOpen("set-username");
    }
  }, [onOpen]);

  return null;
}

export default ClientUsernameModalSetter;
