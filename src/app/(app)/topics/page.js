import TopicCard from "./_components/topic-card";

const fetchTopics = async () => {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/topics`);
    const res = await response.json();
    if (res.success) return res.data;
    throw new Error(res.message ?? "An error occurred");
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function Topics() {
  const topics = await fetchTopics();

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900 md:text-6xl">
          Explore topics
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Discover stories, thinking, and expertise from writers and
          publications on topics that matter to you.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-12">
        <div className="relative mx-auto max-w-2xl">
          <input
            type="text"
            placeholder="Search topics..."
            className="w-full rounded-full border border-gray-300 px-6 py-4 pr-12 text-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
          />
          <button className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* All Topics */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-gray-900">All topics</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Topics;
