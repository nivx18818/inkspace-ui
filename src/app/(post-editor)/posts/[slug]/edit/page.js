import PostForm from "../../_components/post-form";
import { updatePost } from "./action";

const fetchPostBySlug = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${slug}`,
    );
    const res = await response.json();
    if (res.success) return res.data;
    throw new Error(res.message ?? "An error occurred");
  } catch (error) {
    console.error(error);
    return null;
  }
};

async function EditPostForm({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  const data = {
    slug: post.slug,
    title: post.title,
    content: post.content,
  };

  return <PostForm formAction={updatePost} data={data} />;
}

export default EditPostForm;
