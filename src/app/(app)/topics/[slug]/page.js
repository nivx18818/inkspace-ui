import { topicService } from "@/services";

import Link from "next/link";
import PostList from "@/components/post-list";
import FilterTabs from "./_components/filter-tabs";
import TopicHeroSection from "./_components/topic-hero-section";
import TopicSidebar from "./_components/topic-sidebar";

async function TopicDetail({ params }) {
  const { slug } = await params;
  const topic = await topicService.getBySlug(slug);
  const posts = topic.Posts;

  if (!topic) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            Topic not found
          </h1>
          <p className="text-muted-foreground">
            The topic you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-primary hover:text-green-700"
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
