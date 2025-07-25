import httpRequest from "@/utils/http-request";

const getAll = async () => {
  const res = await httpRequest.get("/topics");
  if (res.error) console.error(res.error);
  return res.data;
};

const getBySlug = async (slug) => {
  const res = await httpRequest.get(`/topics/${slug}`);
  if (res.error) console.error(res.error);
  return res.data;
};

export default { getAll, getBySlug };
