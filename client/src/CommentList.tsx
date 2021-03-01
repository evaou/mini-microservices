const CommentList = ({ comments }: any) => {
  const renderedComments = Object.values(comments).map((comment) => {
    interface CommentItem {
      id: string;
      content: string;
      status: string;
    }

    const typedComment = comment as CommentItem;

    let content;

    switch (typedComment.status) {
      case "approved":
        content = typedComment.content;
        break;
      case "pending":
        content = "This comment is awaiting moderation.";
        break;
      case "rejected":
        content = "This comment has been rejected.";
        break;
      default:
        break;
    }

    return <li key={typedComment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
