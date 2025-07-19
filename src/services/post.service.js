import httpRequest from "@/utils/http-request";

const getAll = async () => {
  const posts = await httpRequest.get("/posts");
  return posts;
};

const getBySlug = async (slug) => {
  const post = await httpRequest.get(`/posts/${slug}`);
  return post;
};

export default { getAll, getBySlug };
