import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "@/utils/http-request";

const meThunk = createAsyncThunk("auth/me", async (_, { rejectWithValue }) => {
  try {
    const res = await httpRequest.get("/auth/me", {
      withCredentials: true,
    });
    return res.ok;
  } catch (error) {
    return rejectWithValue(error.response?.message ?? "Failed to fetch user");
  }
});

const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await httpRequest.post("/auth/login", credentials, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.message ?? "Login failed");
    }
  },
);

const registerThunk = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await httpRequest.post("/auth/register", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.message ?? "Registration failed");
    }
  },
);

const refreshTokenThunk = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const res = await httpRequest.post("/auth/refresh-token", null, {
        withCredentials: true,
      });
      return res.ok;
    } catch (error) {
      return rejectWithValue("Failed to refresh token");
    }
  },
);

const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await httpRequest.post("/auth/logout", null, {
        withCredentials: true,
      });
      return res.ok;
    } catch (err) {
      return rejectWithValue("Logout failed");
    }
  },
);

const checkInfoThunk = createAsyncThunk(
  "auth/checkInfo",
  async ({ type, value }, { rejectWithValue }) => {
    try {
      const res = await httpRequest.get(`/auth/check-${type}?${type}=${value}`);
      return res.data.exists;
    } catch (error) {
      return rejectWithValue(error.response?.message ?? "Check info failed");
    }
  },
);

export {
  meThunk,
  loginThunk,
  registerThunk,
  refreshTokenThunk,
  logoutThunk,
  checkInfoThunk,
};
