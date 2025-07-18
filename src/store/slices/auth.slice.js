import { createSlice } from "@reduxjs/toolkit";
import authThunks from "../thunks/auth.thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    checkResult: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // me cases
      .addCase(authThunks.me.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authThunks.me.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(authThunks.me.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // login cases
      .addCase(authThunks.login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authThunks.login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(authThunks.login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      // register cases
      .addCase(authThunks.register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authThunks.register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(authThunks.register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // refreshToken cases
      .addCase(authThunks.refreshToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authThunks.refreshToken.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(authThunks.refreshToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // logout cases
      .addCase(authThunks.logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authThunks.logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(authThunks.logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // checkInfo cases
      .addCase(authThunks.checkInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authThunks.checkInfo.fulfilled, (state) => {
        state.isLoading = false;
        state.checkResult = action.payload;
      })
      .addCase(authThunks.checkInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice;
