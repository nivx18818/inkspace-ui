"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import {
  faHandsClapping,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import clsx from "clsx";
import useCurrentUser from "@/store/hooks/user-current-user";
import { postService } from "@/services";
import { useState } from "react";

function ArticleFooter({ post }) {
  const user = useCurrentUser();
  const [likeCount, setLikeCount] = useState(post.Likes.length);
  const [liked, setLiked] = useState(post.Likes.some((u) => u.id === user.id));

  const handleLikePost = async () => {
    const res = !liked
      ? await postService.like(post.slug)
      : await postService.unlike(post.slug);

    if (res.error) {
      toast.error(res.error.message);
    } else {
      setLiked(!liked);
      setLikeCount(!liked ? likeCount + 1 : likeCount - 1);
    }
  };

  const handleScrollToCommentsSection = () => {
    document
      .getElementById("comments-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Copied post URL to clipboard!");
    } catch (err) {
      toast.error("Failed to copy URL.");
    }
  };

  return (
    <footer className="mt-16 border-t border-gray-200 pt-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            className={clsx(
              "flex items-center space-x-2 hover:text-foreground",
              liked ? "text-foreground" : "text-muted-foreground",
            )}
            onClick={handleLikePost}
          >
            <FontAwesomeIcon icon={faHandsClapping} />
            <span>{likeCount}</span>
          </button>
          <button
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
            onClick={handleScrollToCommentsSection}
          >
            <FontAwesomeIcon icon={faComment} />
            <span>{post.Comments.length}</span>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <button
            className="text-muted-foreground hover:text-foreground"
            onClick={handleShare}
          >
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default ArticleFooter;
