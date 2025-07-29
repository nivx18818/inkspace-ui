import httpRequest from "@/utils/http-request";

export const getAll = async () => {
  const res = await httpRequest.get("/topics");
  if (res.error) console.error(res.error.message);
  return res.data;
};

export const getBySlug = async (slug) => {
  const res = await httpRequest.get(`/topics/${slug}`);
  if (res.error) console.error(res.error.message);
  return res.data;
};
