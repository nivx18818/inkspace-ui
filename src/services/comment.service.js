import httpRequest from "@/utils/http-request";

export const create = async (postSlug, data) => {
  const res = await httpRequest.post(`/posts/${postSlug}/comments`, data);
  return res;
};
