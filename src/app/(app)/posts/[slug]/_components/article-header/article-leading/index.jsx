function ArticleLeading({ post }) {
  return (
    <>
      <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
        {post.title}
      </h1>

      <div className="mb-8 flex items-center space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
          <span className="text-lg font-medium text-white">
            {(post.author || "A").charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="mb-1 flex items-center space-x-2">
            <span className="font-medium text-gray-900">
              {post.author || "Anonymous"}
            </span>
            <button className="text-sm text-primary hover:text-green-700">
              Follow
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "December 25, 2023"}
            </span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleLeading;
