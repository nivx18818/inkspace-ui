function ArticleBody({ post }) {
  return (
    <div className="space-y-8">
      <p className="text-xl leading-relaxed font-light text-muted-foreground">
        {post.description}
      </p>

      {post.content.map((block) => {
        switch (block.type) {
          case "text":
            return (
              <p key={block.id} className="text-lg">
                {block.content}
              </p>
            );

          case "image":
            return (
              <img key={block.id} className="w-full" src={block.src} alt="" />
            );

          case "youtube":
            return (
              <div key={block.id} className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${block.src}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default ArticleBody;
