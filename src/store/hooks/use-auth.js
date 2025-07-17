import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const checkResult = useSelector((state) => state.auth.checkResult);
  return { user, loading, error, checkResult };
};

export default useAuth;
