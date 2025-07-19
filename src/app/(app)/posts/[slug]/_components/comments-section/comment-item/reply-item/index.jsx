function ReplyItem({ reply }) {
  const user = reply.User;
  const profile = user?.Profile || {};

  return (
    <div className="flex gap-3">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={
            profile.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "Anonymous")}&background=6366f1&color=fff&size=32`
          }
          alt={user?.name || "Anonymous"}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>

      {/* Reply Content */}
      <div className="min-w-0 flex-1">
        {/* User Info */}
        <div className="mb-1 flex items-center gap-2">
          <h5 className="text-sm font-medium text-gray-900">{user?.name}</h5>
          <span className="text-xs text-gray-500">@{user?.username}</span>
          <span className="text-xs text-gray-400">•</span>
          <time className="text-xs text-gray-500">1h ago</time>
        </div>

        {/* Reply Text */}
        <p className="mb-2 text-sm leading-relaxed text-gray-800">
          {reply.content}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 text-xs">
          <button className="flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-700">
            <FontAwesomeIcon icon={faReply} className="h-3 w-3" />
            <span>Reply</span>
          </button>

          <button className="flex items-center gap-1 text-gray-500 transition-colors hover:text-red-500">
            <FontAwesomeIcon icon={faHeart} className="h-3 w-3" />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReplyItem;
