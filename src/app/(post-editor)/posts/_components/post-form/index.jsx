"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { toast } from "react-toastify";
import SwitchButton from "./switch-button";
import { postService } from "@/services";
import clsx from "clsx";

function PostForm({
  isCreating = true,
  postData = { title: "", description: "", content: "" },
}) {
  const router = useRouter();
  const [title, setTitle] = useState(postData.title);
  const [description, setDescription] = useState(postData.description);
  const [content, setContent] = useState(postData.content);
  const [currentView, setCurrentView] = useState("editor");

  const handleToggle = () => {
    setCurrentView((prev) => (prev === "editor" ? "preview" : "editor"));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      ...Object.fromEntries(formData.entries()),
      status: e.nativeEvent.submitter.dataset.status,
    };

    const res = isCreating
      ? await postService.create(data)
      : await postService.update(postData.slug, data);

    if (res.error) {
      toast.error(res.error.message);
      return;
    }

    toast.success(
      isCreating ? "Post created successfully!" : "Post updated successfully!",
    );

    router.push(`/`);
  };

  return (
    <>
      <form
        id="post-form"
        className={clsx("space-y-8", currentView !== "editor" && "hidden")}
        onSubmit={handleSubmit}
      >
        {/* Title Input */}
        <div>
          <textarea
            name="title"
            placeholder="Title"
            className="field-sizing-content w-full resize-none border-none bg-transparent font-[inherit] text-4xl leading-tight font-bold text-foreground placeholder-muted-foreground outline-none md:text-5xl"
            maxLength={255}
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <textarea
            name="description"
            placeholder="Write a short description..."
            className="field-sizing-content w-full resize-none border-none bg-transparent font-[inherit] text-xl leading-snug text-foreground placeholder-muted-foreground outline-none md:text-2xl"
            maxLength={255}
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>

        {/* Content Editor */}
        <div className="min-h-96">
          <textarea
            name="content"
            placeholder="Tell your story..."
            className="field-sizing-content w-full resize-none border-none bg-transparent font-[inherit] text-lg leading-relaxed text-foreground placeholder-muted-foreground outline-none"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
      </form>

      {currentView !== "editor" && (
        <div className="space-y-8">
          <h1 className="font-[inherit] text-4xl leading-tight font-bold md:text-5xl">
            {title}
          </h1>
          <div
            className="prose prose-lg text-foreground"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(marked(content)),
            }}
          ></div>
        </div>
      )}

      <SwitchButton currentView={currentView} handleToggle={handleToggle} />
    </>
  );
}

export default PostForm;
