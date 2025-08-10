"use client";

import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopicsBar from "./topic-bar";
import {
  faComment,
  faEllipsis,
  faHandsClapping,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { postService } from "@/services";
import Image from "next/image";

function PostList({ topics, initialPosts, isInfiniteScroll = true }) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const loader = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        const nextPosts = await postService.getList(page + 1);
        setPosts([...posts, ...nextPosts]);
        setPage(page + 1);
      }
    });

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [page]);

  return (
    <div className="mx-auto max-w-4xl px-4">
      {topics && topics.length && <TopicsBar topics={topics} />}

      {/* Post list */}
      <div className="mt-8 space-y-6">
        {posts?.map((post, index) => {
          const featuredImage = post.content.find(
            (block) => block.type === "image",
          );

          return (
            <article key={post.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-start space-x-3">
                {/* Author avatar */}
                <div className="shrink-0">
                  <a
                    href={`/@${post.user.username}`}
                    className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-white via-blue-300 to-purple-500"
                  >
                    {post.user.profile.avatar ? (
                      <img
                        src={post.user.profile.avatar}
                        alt={post.user.name}
                      />
                    ) : (
                      <span className="text-xs font-medium text-white">
                        {post.user.name.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </a>
                </div>

                {/* Main content */}
                <div className="min-w-0 flex-1">
                  {/* Author info */}
                  <div className="mb-3 flex items-center space-x-2">
                    <a
                      href={`/@${post.user.username}`}
                      className="text-sm font-medium text-foreground"
                    >
                      {post.user.name}
                    </a>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">
                      {post.createdAt
                        ? new Date(post.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })
                        : ""}
                    </span>
                  </div>

                  {/* Post content */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <a href={`/posts/${post.slug}`} className="group block">
                        <h2 className="mb-2 text-xl leading-tight font-bold text-foreground group-hover:text-gray-700">
                          {post.title}
                        </h2>
                        <p className="mb-4 line-clamp-2 text-base text-muted-foreground">
                          {post.description}
                        </p>
                      </a>

                      {/* Action bar */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {/* Clap button */}
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <FontAwesomeIcon icon={faHandsClapping} />
                            <span className="text-sm">
                              {post.likes?.length}
                            </span>
                          </div>

                          {/* Comment button */}
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <FontAwesomeIcon icon={faComment} />
                            <span className="text-sm">
                              {post.comments?.length}
                            </span>
                          </div>

                          {/* Bookmark button */}
                          <button className="text-gray-400 hover:text-muted-foreground">
                            <FontAwesomeIcon icon={faBookmark} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Featured image */}
                    {featuredImage && (
                      <Image
                        className="h-20 w-32 rounded-lg object-cover"
                        src={featuredImage.src}
                        alt=""
                        height={80}
                        width={128}
                      />
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Infinite scroll */}
        {isInfiniteScroll && <div ref={loader} className="h-4" />}
      </div>
    </div>
  );
}

export default PostList;
