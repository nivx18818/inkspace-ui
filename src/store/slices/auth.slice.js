import { createSlice } from "@reduxjs/toolkit";
import { authThunks } from "../thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    success: false,
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
      })
      .addCase(authThunks.me.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(authThunks.me.rejected, (state, action) => {
        state.isLoading = false;
      })
      // login cases
      .addCase(authThunks.login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(authThunks.login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(authThunks.login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })
      // register cases
      .addCase(authThunks.register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(authThunks.register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(authThunks.register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })
      // refreshToken cases
      .addCase(authThunks.refreshToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authThunks.refreshToken.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(authThunks.refreshToken.rejected, (state, action) => {
        state.isLoading = false;
      })
      // logout cases
      .addCase(authThunks.logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authThunks.logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.success = false;
      })
      .addCase(authThunks.logout.rejected, (state, action) => {
        state.isLoading = false;
      })
      // forgotPassword cases
      .addCase(authThunks.forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(authThunks.forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(authThunks.forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })
      // checkInfo cases
      .addCase(authThunks.checkInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authThunks.checkInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.checkResult = action.payload;
      })
      .addCase(authThunks.checkInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // resendVerification cases
      .addCase(authThunks.resendVerification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authThunks.resendVerification.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(authThunks.resendVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // resendReset cases
      .addCase(authThunks.resendReset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authThunks.resendReset.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(authThunks.resendReset.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice;
