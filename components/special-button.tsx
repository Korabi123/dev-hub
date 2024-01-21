"use client";

import { useRouter } from "next/navigation";
import { RegisterButton } from "./auth/register-button";

interface Props {
  mode?: "register" | "feed";
}

export const ButtonFlickeringLight: React.FC<Props> = ({
  mode = "register",
}) => {
  const router = useRouter();

  if (mode === "register") {
    return (
      <RegisterButton mode="modal" asChild>
        <button className="main-special-button">
          <div className="light" />
          Get Started
        </button>
      </RegisterButton>
    );
  } else {
    return (
      <button className="main-special-button" onClick={() => router.push("/feed")}>
        <div className="light" />
        Get Started
      </button>
    );
  }
};
