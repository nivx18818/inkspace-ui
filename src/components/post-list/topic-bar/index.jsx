function TopicsBar({ topics }) {
  return (
    <div className="sticky top-18 z-40 border-b border-gray-200 bg-background">
      <div className="mx-auto flex max-w-full gap-5 px-6 py-4">
        <div className="relative flex items-center space-x-2 overflow-x-hidden md:space-x-4 lg:space-x-8">
          <span className="text-sm whitespace-nowrap text-muted-foreground">
            Popular topics:
          </span>
          {topics?.map((topic) => (
            <a
              key={topic.id}
              href={`topics/${topic.slug}`}
              className="text-sm whitespace-nowrap text-muted-foreground hover:text-foreground"
            >
              {topic.name}
            </a>
          ))}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
        <div className="flex items-center">
          <a
            href="/topics"
            className="text-sm whitespace-nowrap text-primary hover:text-green-700"
          >
            See all topics
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopicsBar;
