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
        );
    }

    if (latestPosts.success) {
        if (latestPosts.success.length === 0) {
            return (
                <main className="h-full">
                    <Sidebar />
                    <div className="sm:ml-72 pt-20 flex justify-center items-center">
                        <h1 className="text-2xl font-bold">
                            No posts available
                        </h1>
                    </div>
                </main>
            );
        }

        const postData = await Promise.all(
            latestPosts.success.map(async (post) => {
                const user = await getUserById(post.userId);
                return { post, username: user?.username! };
            }),
        );

        return (
            <main className="h-full">
                <Sidebar />
                <div className="sm:ml-72 pt-20 flex justify-center items-center">
                    <div className="grid place-items-center gap-x-10 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
                        {
                            postData.map((data) => (
                                <PostCard
                                    key={data.post.id}
                                    data={data.post}
                                    username={data.username}
                                />
                            ))
                        }
                    </div>
                </div>
            </main>
        );
    }
};

export default FeedPage;