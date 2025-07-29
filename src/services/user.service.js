import httpRequest from "@/utils/http-request";

export const getByUsername = async (username) => {
  const res = await httpRequest.get(`/users/${username}`);
  return res;
};
