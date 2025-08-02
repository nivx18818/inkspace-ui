"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { postService } from "@/services";

import Link from "next/link";
import Toaster from "@/components/toaster";
import ArticleHeader from "./_components/article-header";
import ArticleBody from "./_components/article-body";
import ArticleFooter from "./_components/article-footer";
import DeletePostModal from "./_components/delete-post-modal";
import CommentsSection from "./_components/comments-section";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeletePost = (status) => {
    setIsDeleting(status);
  };

  useEffect(() => {
    const fetchPost = async () => {
      setIsFetching(true);
      const post = await postService.getBySlug(slug);
      setPost(post);
      setIsFetching(false);
    };
    fetchPost();
  }, [slug]);

  if (isFetching) return null;

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-foreground">
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

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <article>
        <ArticleHeader post={post} handleDeletePost={handleDeletePost} />
        <ArticleBody post={post} />
        <ArticleFooter post={post} />
      </article>

      <CommentsSection initialComments={post.comments} />

      {isDeleting && <DeletePostModal handleDeletePost={handleDeletePost} />}
    </div>
  );
}

export default PostDetail;
