function ArticleBody({ post }) {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Featured Image */}
      <div className="mb-12">
        <img
          src={post.coverImage}
          className="h-96 w-full rounded-lg object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="space-y-6 leading-relaxed text-foreground">
        <p className="text-xl leading-relaxed font-light text-muted-foreground">
          {post.description}
        </p>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default ArticleBody;
