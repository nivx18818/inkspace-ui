import Link from "next/link";

function TermsAndPrivacyLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/login"
            className="text-2xl font-bold text-foreground hover:text-gray-700"
          >
            Inkspace
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link href="/help" className="hover:text-gray-700">
              Help Center
            </Link>
            <Link href="/contact" className="hover:text-gray-700">
              Contact
            </Link>
            <Link href="/login" className="hover:text-gray-700">
              Back to Login
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            &copy; 2025 Inkspace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TermsAndPrivacyLayout;
