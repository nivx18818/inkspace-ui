"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authThunks } from "@/store/thunks";
import useAuth from "@/store/hooks/use-auth";

function UserFetching() {
  const dispatch = useDispatch();
  const { success } = useAuth();

  useEffect(() => {
    dispatch(authThunks.me());
  }, [dispatch, success]);

  return null;
}

export default UserFetching;
