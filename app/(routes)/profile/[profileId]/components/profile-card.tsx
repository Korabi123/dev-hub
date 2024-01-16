import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import prismadb from "@/lib/prismadb";
import { PostCard } from "@/components/post-card";
import { User } from "@clerk/nextjs/server";

interface ProfileCardProps {
  profileId: string;
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = async ({
  profileId,
  user,
}) => {
  const latestPostsByUser = await prismadb.post.findMany({
    where: {
      userId: profileId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return (
    <div className="flex sm:ml-72 py-20 sm:items-center sm:justify-center">
      <Card className="lg:w-[800px] md:w-[500px] w-full select-none">
        <CardHeader>
          <CardTitle className="font-bold tracking-tight">
            <div className="flex w-full justify-between">
              <Avatar className="lg:h-40 lg:w-40 h-20 w-20">
                <AvatarImage
                  src={user?.imageUrl}
                  alt={`${user?.username}'s profile image`}
                />
                <AvatarFallback>
                  <Skeleton className="lg:h-40 lg:w-40 w-20 h-20 rounded-full" />
                </AvatarFallback>
              </Avatar>
              <div>
                {user?.firstName && (
                  <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {user?.firstName + ' ' + user?.lastName}
                  </p>
                )}
                {!user?.firstName && (
                  null
                )}
                <p className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-zinc-400">
                  @{user?.username}
                </p>
              </div>
            </div>
          </CardTitle>
          <CardDescription>
            <p className="mt-8 scroll-m-20 md:text-2xl text-lg tracking-tight text-black">
              {/* @ts-ignore */}
              {user.unsafeMetadata.bio}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <p className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Posts
            </p>
            <Separator className="mt-2 mb-6" />
            <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-center">
              {latestPostsByUser.map((post) => (
                <PostCard className="mb-4" key={post.id} data={post} username={user?.username as string} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
