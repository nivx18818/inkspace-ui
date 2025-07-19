function RecommendedTopics({ topics }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        Recommended topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics?.slice(0, 9).map((topic) => (
          <a
            key={topic.id}
            href={`/topics/${topic.slug}`}
            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            {topic.name}
          </a>
        ))}
      </div>
      <a
        href="/topics"
        className="mt-3 inline-block text-sm text-primary hover:text-green-700"
      >
        See more topics
      </a>
    </div>
  );
}

export default RecommendedTopics;
