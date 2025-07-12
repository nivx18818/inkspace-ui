function PostList({ posts }) {
  return (
    <div className="space-y-8">
      {posts?.map((post, index) => (
        <a key={post.id} href={`/posts/${post.slug}`} className="group block">
          <article>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
                  <span className="text-sm font-medium text-white">
                    {(post.author || "A").charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">
                    {post.author || "Anonymous"}
                  </span>
                  <span className="text-sm text-gray-500">·</span>
                  <span className="text-sm text-gray-500">
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : "recently"}
                  </span>
                </div>
                <div
                  className={`grid ${
                    index % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-1"
                  } gap-6`}
                >
                  <div className={index % 3 === 0 ? "lg:col-span-2" : ""}>
                    <h2 className="mb-2 line-clamp-2 text-xl font-bold text-gray-900 group-hover:text-gray-700">
                      {post.title}
                    </h2>
                    <p className="mb-4 line-clamp-2 text-gray-600">
                      {post.excerpt ||
                        "Exploring the latest trends in technology and development, from AI breakthroughs to innovative coding practices that are shaping the future."}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                          Technology
                        </span>
                        <span className="text-sm text-gray-500">
                          5 min read
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button className="text-gray-400 hover:text-gray-600">
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
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
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
                        <button className="text-gray-400 hover:text-gray-600">
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
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {index % 3 === 0 && (
                    <div className="flex-shrink-0">
                      <div className="h-32 w-full rounded-lg bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}

export default PostList;
