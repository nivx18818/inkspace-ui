import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

function ArticleFooter({ post }) {
  return (
    <footer className="mt-16 border-t border-gray-200 pt-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-muted-foreground hover:text-gray-900">
            <FontAwesomeIcon icon={faHeart} />
            <span>{post.Likes.length}</span>
          </button>
          <button className="flex items-center space-x-2 text-muted-foreground hover:text-gray-900">
            <FontAwesomeIcon icon={faComment} />
            <span>{post.Comments.length}</span>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">Share</span>
          <button className="rounded-full p-2 text-muted-foreground hover:bg-gray-100 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default ArticleFooter;
