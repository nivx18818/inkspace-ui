"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { authThunks } from "@/store/thunks";
import useAuth from "@/store/hooks/use-auth";

function ForgotPasswordForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const { success, isLoading, error } = useAuth();

  useEffect(() => {
    if (success) {
      router.replace(
        `/email-sent?type=reset&email=${encodeURIComponent(email)}`,
      );
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(authThunks.forgotPassword(email));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-foreground placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading || !email}
        className="w-full rounded-full bg-black px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {isLoading ? "Sending..." : "Send reset link"}
      </button>

      {error && (
        <div className="mt-4 text-red-600">
          {error.message || "An error occurred. Please try again."}
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

export default ForgotPasswordForm;
