import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-4">
        Posts: {posts.length}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto my-5">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
