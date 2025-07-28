"use client";

import { useState } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import SwitchButton from "./switch-button";

function PostForm({ formAction, data = { title: "", content: "" } }) {
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const [currentView, setCurrentView] = useState("editor");

  const handleToggle = () => {
    setCurrentView((prev) => (prev === "editor" ? "preview" : "editor"));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <SwitchButton currentView={currentView} handleToggle={handleToggle} />

      {currentView === "editor" ? (
        <form id="post-form" action={formAction} className="space-y-8">
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
      ) : (
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
    </>
  );
}

export default PostForm;
