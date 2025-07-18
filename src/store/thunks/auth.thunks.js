import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "@/utils/http-request";

const me = createAsyncThunk("auth/me", async (_, { rejectWithValue }) => {
  try {
    const res = await httpRequest.get("/auth/me", {
      withCredentials: true,
    });
    return res.ok;
  } catch (error) {
    return rejectWithValue(error.response?.message ?? "Failed to fetch user");
  }
});

const login = createAsyncThunk(
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

const register = createAsyncThunk(
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

const refreshToken = createAsyncThunk(
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

const logout = createAsyncThunk(
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

const checkInfo = createAsyncThunk(
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

export default {
  me,
  login,
  register,
  refreshToken,
  logout,
  checkInfo,
};
