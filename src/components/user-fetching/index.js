"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authThunks } from "@/store/thunks";
import useAuth from "@/store/hooks/use-auth";

function UserFetching() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    dispatch(authThunks.me());
  }, [dispatch, isAuthenticated]);

  return null;
}

export default UserFetching;
