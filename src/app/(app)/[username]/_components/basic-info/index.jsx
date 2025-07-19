import Image from "next/image";

function BasicInfo({ user, profile }) {
  return (
    <div className="mb-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
      <div className="flex-shrink-0">
        <Image
          src={
            profile.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6366f1&color=fff&size=128`
          }
          alt={user.name}
          width={128}
          height={128}
          className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>

      <div className="flex-1">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">{user.name}</h1>
        <p className="mb-2 text-xl text-gray-600">@{user.username}</p>
        {profile.title && (
          <p className="mb-3 text-lg text-gray-700">{profile.title}</p>
        )}
        {profile.bio && (
          <p className="leading-relaxed text-gray-600">{profile.bio}</p>
        )}
      </div>
    </div>
  );
}

export default BasicInfo;
