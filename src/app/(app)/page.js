import PostList from "@/components/post-list";
import Sidebar from "./_components/sidebar";
import { topicService, postService } from "@/services";

async function Home() {
  const topics = await topicService.getAll();
  const posts = await postService.getList();

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <main className="pt-20 lg:col-span-2">
          <PostList topics={topics} initialPosts={posts} />
        </main>

        <div className="sticky top-0 scrollbar-hidden max-h-screen overflow-y-scroll">
          <Sidebar topics={topics} posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default Home;
