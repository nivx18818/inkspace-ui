function TopicHeroSection({ topic }) {
  return (
    <section className="border-b border-gray-200 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-4xl">
          <div className="mb-4">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to home
            </a>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-foreground md:text-6xl">
            {topic.name}
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-muted-foreground">
            Discover stories, thinking, and expertise from writers on{" "}
            {topic.name.toLowerCase()}.
          </p>
          <div className="flex items-center space-x-4">
            <button className="rounded-full bg-primary px-6 py-2 text-sm text-white hover:bg-green-700">
              Follow
            </button>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              {/* <span>1.2M followers</span>
              <span>·</span> */}
              <span>{topic.posts.length} stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopicHeroSection;
