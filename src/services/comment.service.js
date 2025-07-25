import httpRequest from "@/utils/http-request";

const create = async (postSlug, data) => {
  const res = await httpRequest.post(`/posts/${postSlug}/comments`, data);
  return res;
};

export default { create };
