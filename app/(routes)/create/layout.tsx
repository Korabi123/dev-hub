import Sidebar from "@/components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Post | DevHub"
}

const CreateLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
 
export default CreateLayout;