"use client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faHeart } from "@fortawesome/free-solid-svg-icons";
import ReplyItem from "./reply-item";

dayjs.extend(relativeTime);

function CommentItem({ comment }) {
  const user = comment.User;
  const profile = user?.Profile || {};
  const replies = [...(comment.Replies || [])].reverse();

  return (
    <div className="group">
      <div className="flex gap-3">
        {/* Avatar */}
        <a href={`/@${user.username}`} className="block flex-shrink-0">
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
        </a>

        {/* Comment Content */}
        <div className="min-w-0 flex-1">
          {/* User Info */}
          <div className="mb-1 flex items-center gap-2">
            <a
              href={`/@${user.username}`}
              className="font-medium text-foreground"
            >
              {user?.name}
            </a>
            <span className="text-sm text-gray-400">•</span>
            <time className="text-sm text-gray-500">
              {dayjs(comment.createdAt).fromNow()}
            </time>
          </div>

          {/* Comment Text */}
          <p className="mb-3 leading-relaxed text-gray-800">
            {comment.content}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-700">
              <FontAwesomeIcon icon={faReply} className="h-4 w-4" />
              <span>Reply</span>
            </button>

            <button className="flex items-center gap-1 text-gray-500 transition-colors hover:text-red-500">
              <FontAwesomeIcon icon={faHeart} className="h-4 w-4" />
              <span>Like</span>
            </button>
          </div>

          {/* Replies */}
          {replies.length > 0 && (
            <div className="mt-4 border-l-2 border-gray-100 pl-4">
              <div className="space-y-4">
                {replies.map((reply, replyIndex) => (
                  <ReplyItem key={replyIndex} reply={reply} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
