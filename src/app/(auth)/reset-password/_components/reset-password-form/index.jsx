"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { authThunks } from "@/store/thunks";
import useAuth from "@/store/hooks/use-auth";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function ResetPasswordForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { success, isLoading, error } = useAuth();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      router.replace("/forgot-password");
    }
  }, [token, router]);

  useEffect(() => {
    if (success) {
      toast.success(
        "Password reset successful. You can now log in with your new password.",
      );
      router.replace("/login");
    }
  }, [success, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(authThunks.resetPassword({ token, password }));
    setPassword("");
    setConfirmPassword("");
  };

  if (!token) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          New Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 pr-12 text-foreground placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Confirm New Password
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 pr-12 text-foreground placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !password || !confirmPassword}
        className="w-full rounded-full bg-black px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {isLoading ? "Resetting..." : "Reset password"}
      </button>

      {error && (
        <div className="mt-4 text-red-600">
          {passwordError ||
            error?.message ||
            "An error occurred. Please try again."}
        </div>
      )}

      <div className="text-center">
        <Link
          href="/login"
          className="inline-flex items-center text-sm text-primary hover:text-primary-hover"
        >
          ← Back to sign in
        </Link>
      </div>
    </form>
  );
}

export default ResetPasswordForm;
