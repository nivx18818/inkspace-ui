function ProfileStats() {
  return (
    <div className="border-t pt-6">
      <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
        <div>
          <div className="text-2xl font-bold text-foreground">0</div>
          <div className="text-sm text-gray-600">Posts</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground">0</div>
          <div className="text-sm text-gray-600">Followers</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground">0</div>
          <div className="text-sm text-gray-600">Following</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground">0</div>
          <div className="text-sm text-gray-600">Likes</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileStats;
