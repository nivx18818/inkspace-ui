import { Suspense } from "react";
import Link from "next/link";

function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="fixed px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-foreground">
          Inkspace
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
}

export default AuthLayout;
