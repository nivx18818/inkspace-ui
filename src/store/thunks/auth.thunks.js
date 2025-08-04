import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "@/utils/http-request";

export const me = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    const res = await httpRequest.get("/auth/me", {
      withCredentials: true,
    });
    if (res.data) return res.data;
    return rejectWithValue(res.error);
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    const res = await httpRequest.post("/auth/login", credentials, {
      withCredentials: true,
    });
    if (res.data.success) return true;
    return rejectWithValue(res.error);
  },
);

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    const res = await httpRequest.post("/auth/register", data);
    if (res.data.success) return true;
    return rejectWithValue(res.error);
  },
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    const res = await httpRequest.post("/auth/refresh-token", null, {
      withCredentials: true,
    });
    if (res.data.success) return true;
    return rejectWithValue(res.error);
  },
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    const res = await httpRequest.post("/auth/logout", null, {
      withCredentials: true,
    });
    if (res.data.success) return true;
    return rejectWithValue(res.error);
  },
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    const res = await httpRequest.post("/auth/forgot-password", { email });
    if (res.data.success) return true;
    return rejectWithValue(res.error);
  },
);

export const checkInfo = createAsyncThunk(
  "auth/checkInfo",
  async ({ type, value }, { rejectWithValue }) => {
    const res = await httpRequest.get(`/auth/check-${type}?${type}=${value}`);
    if (res.data) return res.data.exists;
    return rejectWithValue(res.error);
  },
);

export const resendVerification = createAsyncThunk(
  "auth/resendVerification",
  async (email, { rejectWithValue }) => {
    const res = await httpRequest.post("/auth/resend-verification", { email });
    if (res.data.success) return true;
    return rejectWithValue(res.error);
  },
);

export const resendReset = createAsyncThunk(
  "auth/resendReset",
  async (email, { rejectWithValue }) => {
    const res = await httpRequest.post("/auth/resend-reset", { email });
    if (res.data.success) return true;
    return rejectWithValue(res.error);
  },
);
