function PostForm({ formAction, data = { slug: "", title: "", content: "" } }) {
  return (
    <form id="post-form" action={formAction} className="space-y-8">
      {/* Title Input */}
      <div>
        <textarea
          name="title"
          placeholder="Title"
          className="w-full text-4xl font-bold leading-tight text-foreground placeholder-muted-foreground bg-transparent border-none outline-none resize-none md:text-5xl font-[inherit] field-sizing-content"
          maxLength={255}
          required
          defaultValue={data.title}
        />
      </div>

      {/* Content Editor */}
      <div className="min-h-96">
        <textarea
          name="content"
          placeholder="Tell your story..."
          className="w-full text-lg leading-relaxed text-foreground placeholder-muted-foreground bg-transparent border-none outline-none resize-none font-[inherit] field-sizing-content"
          required
          defaultValue={data.content}
        />
      </div>
    </form>
  );
}

export default PostForm;
