import httpRequest from "@/utils/http-request";

const getByUsername = async (username) => {
  const res = await httpRequest.get(`/users/${username}`);
  return res;
};

export default { getByUsername };
