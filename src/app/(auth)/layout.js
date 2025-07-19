function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Inkspace</h1>
          <div className="text-sm">
            <span className="text-muted-foreground">No account? </span>
            <a
              href="/signup"
              className="font-medium text-green-600 hover:text-green-700"
            >
              Create one
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        {children}
      </main>
    </div>
  );
}

export default AuthLayout;
