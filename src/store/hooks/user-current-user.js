import { useSelector } from "react-redux";

const useCurrentUser = () => {
  const user = useSelector((state) => state.auth.user);
  return user;
};

export default useCurrentUser;
