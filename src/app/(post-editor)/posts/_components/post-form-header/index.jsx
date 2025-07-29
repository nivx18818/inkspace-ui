import UserMenu from "@/components/user-menu";

function PostFormHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-foreground">
              Inkspace
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              form="post-form"
              data-status="draft"
              className="px-4 py-2 text-sm text-primary hover:text-primary-hover"
            >
              Save draft
            </button>
            <button
              type="submit"
              form="post-form"
              data-status="published"
              className="rounded-full bg-primary px-6 py-2 text-sm text-white hover:bg-primary-hover"
            >
              Publish
            </button>

            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default PostFormHeader;
