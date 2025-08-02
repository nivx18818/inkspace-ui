"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import useCurrentUser from "@/store/hooks/user-current-user";
import { commentService } from "@/services";

function CommentInput({ handleAddComment }) {
  const params = useParams();
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const user = useCurrentUser();
  const maxCommentLen = 1000;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const { data: newComment, error } = await commentService.create(
      params.slug,
      {
        userId: user.id,
        content: comment.trim(),
      },
    );
    console.log(newComment);

    setIsSubmitting(false);

    if (!error) {
      handleAddComment(newComment);
      setComment("");
    } else {
      toast.error(error);
    }
  };

  if (!user) {
    return (
      <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
        <p className="text-gray-600">
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>{" "}
          to join the conversation
        </p>
      </div>
    );
  }

  const profile = user?.profile || {};

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          {/* User Avatar */}
          <div className="flex-shrink-0">
            <Image
              src={
                profile.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "Anonymous")}&background=6366f1&color=fff&size=40`
              }
              alt={user?.name || "Anonymous"}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>

          {/* Comment Input */}
          <div className="min-w-0 flex-1">
            <div className="relative">
              <textarea
                value={comment}
                onChange={(e) =>
                  setComment(e.target.value.slice(0, maxCommentLen))
                }
                placeholder="What's on your mind?"
                rows={3}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 pr-12 text-foreground placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                disabled={isSubmitting}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    e.target.form.requestSubmit();
                  }
                }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!comment.trim() || isSubmitting}
                className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-3 w-3" />
              </button>
            </div>

            {/* Character Count or Helper Text */}
            <div className="mt-2 flex justify-between text-sm text-gray-500">
              <span>
                Press <code>Shift + Enter</code> for new line
              </span>
              <span>
                {comment.length}/{maxCommentLen}
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentInput;
