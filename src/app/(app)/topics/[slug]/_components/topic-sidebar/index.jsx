import RelatedTopics from "./related-topics";
import FeaturedWriter from "./featured-writers";
import TopicStats from "./topic-stats";
import FooterLinks from "@/components/footer-links";

const fetchTopics = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/topics`,
    );
    const res = await response.json();
    if (res.success) return res.data;
    throw new Error(res.message ?? "An error occurred");
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function TopicSidebar({ topic, posts }) {
  const topics = await fetchTopics();

  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-32">
        <RelatedTopics topic={topic} topics={topics} />
        <FeaturedWriter topic={topic} />
        <TopicStats topic={topic} posts={posts} />
        <FooterLinks />
      </div>
    </aside>
  );
}

export default TopicSidebar;
