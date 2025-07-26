"use client";

import { useState } from "react";
import CommentItem from "./comment-item";
import CommentInput from "./comment-input";

function CommentsSection({ initialComments }) {
  const [comments, setComments] = useState(() =>
    [...(initialComments ?? [])].reverse(),
  );
  console.log(comments);

  const handleAddComment = (comment) => {
    const newComments = [comment, ...comments];
    setComments(newComments);
  };

  if (!comments || comments.length === 0) {
    return (
      <div className="mt-12 border-t border-gray-200 pt-8">
        <h3 className="mb-6 text-2xl font-bold text-foreground">Comments</h3>

        <CommentInput placeholder="Be the first to share your thoughts!" />

        <div className="py-12 text-center text-gray-500">
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="comments-section"
      className="mt-12 scroll-m-20 border-t border-gray-200 pt-8"
    >
      <h3 className="mb-6 text-2xl font-bold text-foreground">
        Comments ({comments.length})
      </h3>

      <CommentInput handleAddComment={handleAddComment} />

      <div className="space-y-6">
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentsSection;
