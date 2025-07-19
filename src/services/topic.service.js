import httpRequest from "@/utils/http-request";

const getAll = async () => {
  const topics = await httpRequest.get("/topics");
  return topics;
};

const getBySlug = async (slug) => {
  const topic = await httpRequest.get(`/topics/${slug}`);
  return topic;
};

export default { getAll, getBySlug };
