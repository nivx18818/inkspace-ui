import httpRequest from "@/utils/http-request";

export const getAll = async () => {
  const res = await httpRequest.get("/posts");
  if (res.error) console.error(res.error.message);
  return res.data;
};

export const getBySlug = async (slug) => {
  const res = await httpRequest.get(`/posts/${slug}`);
  if (res.error) console.error(res.error.message);
  return res.data;
};

export const create = async (data) => {
  const res = await httpRequest.post("/posts", data, {
    withCredentials: true,
  });
  return res;
};

export const update = async (slug, data) => {
  const res = await httpRequest.put(`/posts/${slug}`, data, {
    withCredentials: true,
  });
};

export const like = async (slug) => {
  const res = await httpRequest.post(`/posts/${slug}/like`, null, {
    withCredentials: true,
  });
  return res;
};

export const unlike = async (slug) => {
  const res = await httpRequest.post(`/posts/${slug}/unlike`, null, {
    withCredentials: true,
  });
  return res;
};
