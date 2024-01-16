import Sidebar from "@/components/sidebar";

const PostIdLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
 
export default PostIdLayout;