import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export const loader = async () => {
  const response = await fetch("https://react-poster-backend.onrender.com/posts");
  const resData = await response.json();
  return resData.posts;
};
