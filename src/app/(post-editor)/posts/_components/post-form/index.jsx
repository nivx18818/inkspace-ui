"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { postService } from "@/services";
import { toast } from "react-toastify";

import ContentBlocks from "./content-blocks";

function PostForm({
  isCreating = true,
  postData = {
    title: "",
    description: "",
    content: JSON.stringify([]),
  },
}) {
  const router = useRouter();
  const [title, setTitle] = useState(postData.title);
  const [description, setDescription] = useState(postData.description);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("content", JSON.stringify(blocks));

    const res = isCreating
      ? await postService.create(formData)
      : await postService.update(postData.slug, formData);

    if (res.error) {
      toast.error(res.error.message);
      return;
    }

    toast.success(
      isCreating ? "Post created successfully!" : "Post updated successfully!",
    );

    router.push("/");
  };

  return (
    <>
      <form id="post-form" className="space-y-8 pb-100" onSubmit={handleSubmit}>
        {/* Title Input */}
        <div>
          <textarea
            className="post-form-textarea text-4xl leading-tight font-bold md:text-5xl"
            name="title"
            value={title}
            maxLength={255}
            required
            placeholder="Title"
            onChange={handleTitleChange}
          />
        </div>

        {/* Description Input */}
        <div>
          <textarea
            className="post-form-textarea text-xl leading-snug md:text-2xl"
            name="description"
            value={description}
            maxLength={255}
            required
            placeholder="Description"
            onChange={handleDescriptionChange}
          />
        </div>

        {/* Blocks */}
        <ContentBlocks postContent={postData.content} />
      </form>
    </>
  );
}

export default PostForm;
