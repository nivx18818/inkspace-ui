import readingTime from "reading-time";

function ArticleLeading({ post }) {
  const user = post.User;

  return (
    <>
      <h1 className="mb-6 text-4xl leading-tight font-bold text-foreground md:text-5xl">
        {post.title}
      </h1>

      <div className="mb-8 flex items-center space-x-4">
        <img
          className="h-12 w-12 rounded-full"
          src={user?.Profile?.avatar}
          alt={user.name}
        />
        <div className="flex-1">
          <div className="mb-1 flex items-center space-x-2">
            <a className="font-medium text-foreground">
              {user.name || "Anonymous"}
            </a>
            <button className="text-sm text-primary hover:text-green-700">
              Follow
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{readingTime(post.content).text}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleLeading;
