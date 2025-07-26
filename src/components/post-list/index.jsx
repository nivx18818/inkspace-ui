import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopicsBar from "./topic-bar";
import {
  faComment,
  faEllipsis,
  faHandsClapping,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

function PostList({ topics, posts }) {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <TopicsBar topics={topics} />

      {/* Post list */}
      <div className="mt-8 space-y-6">
        {posts?.map((post, index) => (
          <article key={post.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-start space-x-3">
              {/* Author avatar */}
              <div className="flex-shrink-0">
                <a
                  href={`/@${post.User.username}`}
                  className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-white via-blue-300 to-purple-500"
                >
                  {post.User.Profile.avatar ? (
                    <img src={post.User.Profile.avatar} alt={post.User.name} />
                  ) : (
                    <span className="text-xs font-medium text-white">
                      {post.User.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </a>
              </div>

              {/* Main content */}
              <div className="min-w-0 flex-1">
                {/* Author info */}
                <div className="mb-3 flex items-center space-x-2">
                  <a
                    href={`/@${post.User.username}`}
                    className="text-sm font-medium text-foreground"
                  >
                    {post.User.name}
                  </a>
                  <span className="text-sm text-gray-500">·</span>
                  <span className="text-sm text-gray-500">
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : "Mar 19"}
                  </span>
                </div>

                {/* Post content */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <a href={`/posts/${post.slug}`} className="group block">
                      <h2 className="mb-2 text-xl leading-tight font-bold text-foreground group-hover:text-gray-700">
                        {post.title}
                      </h2>
                      <p className="mb-4 line-clamp-2 text-base text-muted-foreground">
                        {post.description}
                      </p>
                    </a>

                    {/* Action bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {/* Clap button */}
                        <button className="flex items-center space-x-1 text-muted-foreground">
                          <FontAwesomeIcon icon={faHandsClapping} />
                          <span className="text-sm">520</span>
                        </button>

                        {/* Comment button */}
                        <button className="flex items-center space-x-1 text-muted-foreground">
                          <FontAwesomeIcon icon={faComment} />
                          <span className="text-sm">24</span>
                        </button>

                        {/* Bookmark button */}
                        <button className="text-gray-400 hover:text-muted-foreground">
                          <FontAwesomeIcon icon={faBookmark} />
                        </button>

                        {/* More options */}
                        <button className="text-gray-400 hover:text-muted-foreground">
                          <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Featured image - show for every 3rd post */}
                  {index % 3 === 0 && (
                    <div className="flex-shrink-0">
                      <div className="h-20 w-20 rounded-md bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default PostList;
