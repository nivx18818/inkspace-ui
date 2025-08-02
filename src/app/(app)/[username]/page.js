import { notFound } from "next/navigation";
import { userService } from "@/services";

import BasicInfo from "./_components/basic-info";
import LocationAndJoinDate from "./_components/location-and-join-date";
import SocialLinks from "./_components/social-links";
import ProfileSkills from "./_components/profile-skills";
import ProfileStats from "./_components/profile-stats";
import RecentPosts from "./_components/recent-posts";

async function Profile({ params }) {
  const username = decodeURIComponent((await params).username);

  if (!username || !username.startsWith("@")) {
    notFound();
  }

  const user = await userService.getByUsername(username.slice(1));
  if (!user) notFound();

  const profile = user.profile || {};
  const skills = user.skills || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Cover Image Section */}
      <div className="relative">
        {profile.coverImage ? (
          <div
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${profile.coverImage})` }}
          >
            <div className="bg-opacity-20 absolute inset-0 bg-black" />
          </div>
        ) : (
          <div className="h-64 bg-gradient-to-r from-green-400 to-blue-500" />
        )}
      </div>

      {/* Profile Content */}
      <div className="relative z-10 mx-auto -mt-16 max-w-4xl px-4">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <BasicInfo user={user} profile={profile} />
          <LocationAndJoinDate user={user} profile={profile} />
          <SocialLinks profile={profile} />
          <ProfileSkills skills={skills} />
          <ProfileStats />
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}

export default Profile;
