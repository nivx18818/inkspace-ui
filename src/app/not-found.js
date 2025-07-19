import Link from "next/link";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto max-w-md px-6 text-center">
        <h1 className="mb-4 text-6xl font-light text-gray-800">404</h1>
        <h2 className="mb-6 text-2xl font-light text-gray-700">
          Page not found
        </h2>
        <p className="mb-8 leading-relaxed text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
