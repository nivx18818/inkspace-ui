"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const createPost = async (formData) => {
  try {
    const data = Object.fromEntries(formData.entries());
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      return { success: false, error: "Failed to create post" };
    }

    const res = await response.json();

    if (!res.success) {
      return { success: false, error: res.message ?? "Server error" };
    }

    const headerList = await headers();
    const referer = headerList.get("referer");
    const path = new URL(referer).pathname;

    revalidatePath(path);
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Network error" };
  }
};
