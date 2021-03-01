import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }: { [key: string]: string }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    let typedComment = comment as { [key: string]: string };

    return <li key={typedComment.id}>{typedComment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
