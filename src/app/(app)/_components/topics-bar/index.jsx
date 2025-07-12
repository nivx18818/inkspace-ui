function TopicsBar({ topics }) {
  return (
    <div className="sticky top-16 z-40 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center space-x-8 overflow-x-auto">
          <span className="text-sm whitespace-nowrap text-gray-600">
            Popular topics:
          </span>
          {topics?.slice(0, 6).map((topic) => (
            <a
              key={topic.id}
              href={`topics/${topic.slug}`}
              className="text-sm whitespace-nowrap text-gray-800 hover:text-black"
            >
              {topic.title}
            </a>
          ))}
          <a
            href="#"
            className="text-sm whitespace-nowrap text-green-600 hover:text-green-700"
          >
            See all topics
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopicsBar;
