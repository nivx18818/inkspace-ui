import PostList from "@/components/post-list";
import Sidebar from "./_components/sidebar";
import topicService from "@/services/topic.service";
import postService from "@/services/post.service";

async function Home() {
  const topics = await topicService.getAll();
  const posts = await postService.getAll();

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <main className="lg:col-span-2">
          <PostList topics={topics} posts={posts} />
        </main>

        <Sidebar topics={topics} posts={posts} />
      </div>
    </div>
  );
}

export default Home;
