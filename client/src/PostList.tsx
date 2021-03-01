import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    interface PostItem {
      id: string;
      title: string;
      comments: {}[];
    }

    const typedPost = post as PostItem;

    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={typedPost.id}
      >
        <div className="card-body">
          <h3>{typedPost.title}</h3>
          <CommentList comments={typedPost.comments} />
          <CommentCreate postId={typedPost.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
