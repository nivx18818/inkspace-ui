function TopicCard({ topic }) {
  return (
    <div className="group">
      <a
        href={`/topics/${topic.slug}`}
        className="block rounded-lg border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-green-500 hover:shadow-md"
      >
        <div className="mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
            <span className="text-xl font-bold text-primary">
              {topic.name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary">
          {topic.name}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {topic.description ||
            `Discover stories, thinking, and expertise about ${topic.name}.`}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span>{Math.floor(Math.random() * 100 + 50)}K followers</span>
            <span>·</span>
            <span>{Math.floor(Math.random() * 500 + 100)} stories</span>
          </div>
          <button className="rounded-full border border-primary px-3 py-1 text-xs text-primary transition-colors hover:bg-green-50">
            Follow
          </button>
        </div>
      </a>
    </div>
  );
}

export default TopicCard;
