function ReadingList({ posts }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-semibold text-foreground">
        Reading list
      </h3>
      <div className="space-y-3">
        {posts?.slice(3, 6).map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <a href={`/posts/${post.slug}`}>
              <h4 className="line-clamp-2 text-sm font-medium text-foreground group-hover:text-gray-700">
                {post.title}
              </h4>
            </a>
            <div className="mt-1 flex items-center space-x-2 text-xs text-gray-500">
              <span>{post.author || "Anonymous"}</span>
              <span>·</span>
              <span>
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  : "Dec 25"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="mt-3 inline-block text-sm text-primary hover:text-green-700"
      >
        See all (12)
      </a>
    </div>
  );
}

export default ReadingList;
