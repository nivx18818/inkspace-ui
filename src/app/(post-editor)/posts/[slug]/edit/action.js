"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const updatePost = async (formData) => {
  const headerList = await headers();
  const referer = headerList.get("referer");
  const path = new URL(referer).pathname; // E.g. /posts/:slug/edit
  let slug = path.split("/")[2];
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${slug}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to update post");
    }

    const res = await response.json();

    if (!res.success) {
      throw new Error("Server error");
    }

    slug = res.data.slug;
  } catch (error) {
    console.error(error);
  }

  redirect(`/posts/${slug}`);
};
