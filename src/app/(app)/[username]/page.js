import { notFound } from "next/navigation";

async function Profile({ params }) {
  const { username } = await params;

  if (!username || !username.startsWith("@")) {
    notFound();
  }

  const cleanUsername = username.slice(1);

  return <div>Profile of @{cleanUsername}</div>;
}

export default Profile;
