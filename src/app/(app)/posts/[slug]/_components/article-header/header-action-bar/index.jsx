"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";

import useCurrentUser from "@/store/hooks/user-current-user";

function HeaderActionBar({ post, handleDeletePost }) {
  const user = useCurrentUser();

  return (
    <div className="flex items-center justify-between border-y border-gray-200 py-4">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <FontAwesomeIcon icon={faHandsClapping} />
            <span className="text-sm">{post.likes.length}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <FontAwesomeIcon icon={faComment} />
            <span className="text-sm">{post.comments.length}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-muted-foreground hover:text-foreground">
          <FontAwesomeIcon icon={faBookmark} />
        </button>
        {post.userId === user.id && (
          <>
            <a
              href={`/posts/${post.slug}/edit`}
              className="text-muted-foreground hover:text-foreground"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </a>
            <button
              onClick={() => handleDeletePost(true)}
              className="text-red-600 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HeaderActionBar;
