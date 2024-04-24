import "./MyPosts.module.css";
import { Post } from "./Post/Post";
export function MyPosts() {
  return (
    <div className="posts">
      <input type="text" name="" id="" />
      <button></button>
      <Post message="Hi, there!" likesCount={15} />
      <Post message="Hello, i'm student" likesCount={20} />
    </div>
  );
}
