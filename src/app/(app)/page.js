import PostList from "@/components/post-list";
import Sidebar from "./_components/sidebar";

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

const fetchPosts = async () => {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/posts`);
    const res = await response.json();
    if (res.success) return res.data;
    throw new Error(res.message ?? "An error occurred");
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function Home() {
  const topics = await fetchTopics();
  const posts = await fetchPosts();

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
