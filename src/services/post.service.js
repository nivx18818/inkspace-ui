import httpRequest from "@/utils/http-request";

const getAll = async () => {
  const res = await httpRequest.get("/posts");
  if (res.error) console.error(res.error);
  return res.data;
};

const getBySlug = async (slug) => {
  const res = await httpRequest.get(`/posts/${slug}`);
  if (res.error) console.error(res.error);
  return res.data;
};

const like = async (slug) => {
  const res = await httpRequest.post(`/posts/${slug}/like`, null, {
    withCredentials: true,
  });
  return res;
};

const unlike = async (slug) => {
  const res = await httpRequest.post(`/posts/${slug}/unlike`, null, {
    withCredentials: true,
  });
  return res;
};

export default { getAll, getBySlug, like, unlike };
