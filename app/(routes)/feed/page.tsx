import { PostCard } from "@/components/post-card";
import Sidebar from "@/components/sidebar";
import { fetchPosts } from "@/data/fetch-posts";
import { getUserById } from "@/data/user";

const FeedPage = async () => {
  const latestPosts = await fetchPosts();

  if (latestPosts.error) {
    return (
      <main className="h-full">
        <Sidebar />

        <div className="sm:ml-72 pt-20 flex justify-center items-center">
          <h1 className="text-2xl font-bold">
            {latestPosts.error}
          </h1>
        </div>
      </main>
    )
  }

  if (latestPosts.success)
    return (
      <main className="h-full">
        <Sidebar />

        <div className="sm:ml-72 pt-20 flex justify-center items-center">
          <div className="grid place-items-center gap-x-10 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
            {latestPosts.success.map(async post => {
              const user = await getUserById(post.userId);

              return (
                <PostCard
                  key={post.id}
                  data={post}
                  username={user?.username!}
                />
              )
            })}
          </div>
        </div>
      </main>
    );
};

export default FeedPage;
