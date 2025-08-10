import FooterLinks from "@/components/footer-links";
import ReadingList from "./reading-list";
import RecommendedTopics from "./recommended-topics";
import StaffPicks from "./staff-picks";
import WhoToFollow from "./who-to-follow";

function Sidebar({ topics, posts }) {
  return (
    <aside className="lg:col-span-1">
      <StaffPicks posts={posts} />
      <RecommendedTopics topics={topics} />
      <WhoToFollow />
      <ReadingList posts={posts} />
      <FooterLinks />
    </aside>
  );
}

export default Sidebar;
