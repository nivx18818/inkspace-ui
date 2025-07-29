import { postService } from "@/services";
import PostForm from "../../_components/post-form";

async function EditPostForm({ params }) {
  const { slug } = await params;
  const post = await postService.getBySlug(slug);
  const postData = {
    slug: post.slug,
    title: post.title,
    content: post.content,
  };

  return <PostForm isCreating={false} postData={postData} />;
}

export default EditPostForm;
