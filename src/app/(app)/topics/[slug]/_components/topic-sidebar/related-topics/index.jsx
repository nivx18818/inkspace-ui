function RelatedTopics({ topic, topics }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        Related topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics.map(
          (top) =>
            top.id !== topic.id && (
              <a
                key={top.id}
                href={`/topics/${top.slug}`}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                {top.title}
              </a>
            ),
        )}
      </div>
    </div>
  );
}

export default RelatedTopics;
