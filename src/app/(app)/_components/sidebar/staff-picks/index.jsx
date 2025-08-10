import readingTime from "reading-time";

function StaffPicks({ posts }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-semibold text-foreground">
        Staff Picks
      </h3>
      <div className="space-y-6">
        {posts?.slice(0, 3).map((post) => (
          <a
            key={post.id}
            href={`posts/${post.slug}`}
            className="group block cursor-pointer"
          >
            <div className="flex items-start space-x-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-green-400 to-blue-500">
                <img src={post.user?.profile?.avatar} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center space-x-1">
                  <span className="text-sm font-medium text-foreground">
                    {post.user?.name || "Anonymous"}
                  </span>
                  {/* <span className="text-sm text-muted-foreground">in</span>
                  <span className="text-sm font-medium text-foreground">
                    Technology
                  </span> */}
                </div>
                <h4 className="mb-1 line-clamp-2 text-sm font-semibold text-foreground group-hover:text-gray-700">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span>
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : "Dec 25"}
                  </span>
                  <span>·</span>
                  <span>{readingTime(post.content.toString()).text}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default StaffPicks;
