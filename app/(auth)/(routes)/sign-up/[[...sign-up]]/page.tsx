import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "Sign Up | DevHub",
  icons: ['/favicon.ico'],
}

export default function Page() {
  return <SignUp />;
}