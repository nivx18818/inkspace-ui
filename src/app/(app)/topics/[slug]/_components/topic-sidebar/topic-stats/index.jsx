function TopicStats({ topic, posts }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-semibold text-foreground">
        About {topic.title}
      </h3>
      <div className="rounded-lg bg-gray-50 p-4">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Stories</span>
            <span className="font-medium text-foreground">{posts.length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Followers</span>
            <span className="font-medium text-foreground">1.2M</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Writers</span>
            <span className="font-medium text-foreground">15.3K</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicStats;
