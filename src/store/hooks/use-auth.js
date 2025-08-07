import { useSelector } from "react-redux";

const useAuth = () => {
  const success = useSelector((state) => state.auth.success);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const checkResult = useSelector((state) => state.auth.checkResult);
  return { success, isLoading, error, checkResult };
};

export default useAuth;
