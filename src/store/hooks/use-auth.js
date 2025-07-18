import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const checkResult = useSelector((state) => state.auth.checkResult);
  return { user, isAuthenticated, isLoading, error, checkResult };
};

export default useAuth;
