"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";

import Toaster from "@/components/toaster";
import ArticleHeader from "./_components/article-header";
import ArticleBody from "./_components/article-body";
import ArticleFooter from "./_components/article-footer";
import DeletePostModal from "./_components/delete-post-modal";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeletePost = (status) => {
    setIsDeleting(status);
  };

  useEffect(() => {
    const fetchPostBySlug = async (slug) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${slug}`,
        );
        const res = await response.json();
        if (res.success) setPost(res.data);
        else throw new Error(res.message ?? "An error occurred");
      } catch (error) {
        console.error(error);
        setPost(null);
      }
    };
    fetchPostBySlug(slug);
  }, [slug]);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background">
      <article className="mx-auto max-w-4xl px-6 py-12">
        <ArticleHeader post={post} handleDeletePost={handleDeletePost} />
        <ArticleBody post={post} />
        <ArticleFooter post={post} />
      </article>

      {isDeleting && <DeletePostModal handleDeletePost={handleDeletePost} />}

      <Toaster />
    </div>
  );
}

export default PostDetail;
