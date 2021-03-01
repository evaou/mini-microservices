const CommentList = ({ comments }: any) => {
  const renderedComments = Object.values(comments).map((comment) => {
    interface CommentItem {
      id: string;
      content: string;
    }

    const typedComment = comment as CommentItem;

    return <li key={typedComment.id}>{typedComment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
