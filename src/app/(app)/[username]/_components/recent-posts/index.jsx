import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RecentPosts() {
  return (
    <div className="mt-8 border-t pt-8">
      <h3 className="mb-6 text-xl font-semibold text-foreground">
        Recent Posts
      </h3>
      <div className="py-12 text-center text-muted-foreground">
        <FontAwesomeIcon
          icon={faFileAlt}
          className="mx-auto h-12 w-12 text-muted-foreground"
        />
        <p className="mt-2">No posts yet</p>
      </div>
    </div>
  );
}

export default RecentPosts;
