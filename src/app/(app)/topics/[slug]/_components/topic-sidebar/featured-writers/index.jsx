function FeaturedWriter({ topic }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        Featured writers
      </h3>
      <div className="space-y-4">
        {["Sarah Chen", "David Kim", "Alex Rodriguez", "Maria Lopez"].map(
          (author, index) => (
            <div key={author} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`h-8 w-8 bg-gradient-to-br ${
                    index === 0
                      ? "from-pink-400 to-red-500"
                      : index === 1
                        ? "from-blue-400 to-indigo-500"
                        : index === 2
                          ? "from-yellow-400 to-orange-500"
                          : "from-green-400 to-teal-500"
                  } flex items-center justify-center rounded-full`}
                >
                  <span className="text-xs font-medium text-white">
                    {author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {topic.title} expert
                  </div>
                </div>
              </div>
              <button className="rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-green-50">
                Follow
              </button>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default FeaturedWriter;
