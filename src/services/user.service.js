import httpRequest from "@/utils/http-request";

const getByUsername = async (username) => {
  const user = await httpRequest.get(`/users/${username}`);
  return user;
};

export default { getByUsername };
