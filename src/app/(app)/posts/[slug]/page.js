"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";

import { Slide, ToastContainer } from "react-toastify";
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

      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={2}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
        className="text-sm select-none"
        icon={({ type }) => {
          if (type === "error") {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            );
          }
          return null;
        }}
      />
    </div>
  );
}

export default PostDetail;
