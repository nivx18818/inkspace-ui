import CommentItem from "./comment-item";

function CommentsSection({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="mt-12 border-t pt-8">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Comments</h3>
        <div className="py-12 text-center text-gray-500">
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 border-t pt-8">
      <h3 className="mb-6 text-2xl font-bold text-gray-900">
        Comments ({comments.length})
      </h3>

      <div className="space-y-6">
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentsSection;
