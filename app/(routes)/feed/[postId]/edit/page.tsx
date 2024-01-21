import prismadb from "@/lib/prismadb";
import EditPostForm from "./components/edit-form";

import { currentUser } from "@/lib/auth";
import { getPostById } from "@/data/get-post-by-id";
import Sidebar from "@/components/sidebar";

const EditPage = async ({ params }: { params: { postId: string } }) => {
  const postById = await getPostById(params.postId);

  const user = await currentUser();
  const logedInUserId = user?.id;
  
  if (postById.error) {
    return (
      <main className="h-full">
        <Sidebar />

        <div className="sm:ml-72 pt-20 flex justify-center items-center">
          <h1 className="text-2xl font-bold">
            {postById.error}
          </h1>
        </div>
      </main>
    )
  }
  
  if (postById.success)

    if (postById && logedInUserId === postById.success?.userId) {
      return (
        <div>
          <EditPostForm data={postById.success} paramsId={params.postId} />
        </div>
      );
    } else if (logedInUserId !== postById.success?.userId && postById) {
      throw new Error("You are not authorized to access this page.")
    } else if (!postById) {
      throw new Error("We could not find the post you are looking for, please try again.")
    }
};

export default EditPage;
