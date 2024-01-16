import prismadb from "@/lib/prismadb";
import EditPostForm from "./components/edit-form";

import { auth, clerkClient } from "@clerk/nextjs";
import Image from "next/image";

const EditPage = async ({ params }: { params: { postId: string } }) => {
  const postById = await prismadb.post.findUnique({
    where: {
      id: params.postId,
    },
  });
  
  const { userId } = auth();
  const logedInUser = await clerkClient.users.getUser(userId as string);
  const logedInUserId = logedInUser.id;
  
  if (postById && logedInUserId === postById?.userId) {
    return (
      <div>
        <EditPostForm data={postById} paramsId={params.postId} />
      </div>
    );
  } else if (logedInUserId !== postById?.userId && postById) {
    throw new Error("You are not authorized to access this page.")
  } else if (!postById) {
    throw new Error("We could not find the post you are looking for, please try again.")
  }
};

export default EditPage;
