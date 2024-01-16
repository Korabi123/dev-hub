import { PostCard } from "@/components/post-card";
import Sidebar from "@/components/sidebar";
import prismadb from "@/lib/prismadb";

import { clerkClient } from "@clerk/nextjs";

const FeedPage = async () => {
  const latestPosts = await prismadb.post.findMany({
    orderBy: { createdAt: "desc" },
  });


  return (
    <div className="h-full">
      <Sidebar />

      <div className="sm:ml-72 pt-20 flex justify-center items-center">
        <div className="grid place-items-center gap-x-10 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
          {latestPosts.length === 0 && "No posts."}
          {latestPosts.map(async post => {
            const user = await clerkClient.users.getUser(post.userId);

            return (
              <PostCard
                key={post.id}
                data={post}
                username={user.username as string}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
