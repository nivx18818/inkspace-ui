"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authThunks } from "@/store/thunks";
import useAuth from "@/store/hooks/use-auth";

function UserFetching() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { success } = useAuth();

  useEffect(() => {
    dispatch(authThunks.me());
    if (success) router.push("/");
  }, [dispatch, success]);

  return null;
}

export default UserFetching;
