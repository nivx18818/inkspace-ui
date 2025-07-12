function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-black">
              Inkspace
            </a>
            <nav className="hidden items-center space-x-6 md:flex">
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Our story
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Membership
              </a>
              <a
                href="/posts/create"
                className="text-sm text-gray-600 hover:text-black"
              >
                Write
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Sign in
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-800 md:block">
              Get started
            </button>
            <button className="p-2 text-gray-600 hover:text-black">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
