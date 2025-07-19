import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Post not found
        </h1>
        <p className="text-muted-foreground">
          The post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-primary hover:text-green-700"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
