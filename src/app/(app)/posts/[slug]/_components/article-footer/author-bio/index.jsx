function AuthorBio({ post }) {
  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <div className="flex items-start space-x-4">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
          <span className="text-xl font-medium text-white">
            {(post.author || "A").charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="mb-2 flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-900">
              {post.author || "Anonymous"}
            </h3>
            <button className="rounded-full bg-primary px-4 py-1 text-sm text-white hover:bg-green-700">
              Follow
            </button>
          </div>
          <p className="mb-3 text-muted-foreground">
            Senior Developer and Tech Writer passionate about sharing knowledge
            and exploring the latest innovations in software development.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>42 Followers</span>
            <span>·</span>
            <a href="#" className="text-primary hover:text-green-700">
              View all posts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorBio;
