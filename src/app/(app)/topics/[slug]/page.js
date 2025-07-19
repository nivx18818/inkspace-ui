import PostList from "@/components/post-list";
import FilterTabs from "./_components/filter-tabs";
import TopicHeroSection from "./_components/topic-hero-section";
import TopicSidebar from "./_components/topic-sidebar";
import Link from "next/link";

const fetchTopicBySlug = async (slug) => {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/topics/${slug}`);
    const res = await response.json();
    if (res.success) return res.data;
    throw new Error(res.message ?? "An error occurred");
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchPostsByTopic = async (topicSlug) => {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/topics/${topicSlug}/posts`,
    );
    const res = await response.json();
    if (res.success) return res.data;
    throw new Error(res.message ?? "An error occurred");
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function TopicDetail({ params }) {
  const { slug } = await params;
  const topic = await fetchTopicBySlug(slug);
  const posts = await fetchPostsByTopic(slug);

  if (!topic) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            Topic not found
          </h1>
          <p className="text-muted-foreground">
            The topic you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-green-600 hover:text-green-700"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopicHeroSection topic={topic} posts={posts} />
      <FilterTabs />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Posts List */}
          <main className="lg:col-span-2">
            <PostList posts={posts} />
          </main>

          {/* Sidebar */}
          <TopicSidebar topic={topic} posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default TopicDetail;
