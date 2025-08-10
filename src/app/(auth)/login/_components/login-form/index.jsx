"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { authThunks } from "@/store/thunks";
import useAuth from "@/store/hooks/use-auth";

function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("password123");
  const { success, isLoading, error } = useAuth();

  useEffect(() => {
    if (success) {
      router.push("/");
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(authThunks.login(credentials));
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
          placeholder="Enter your email"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-foreground placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-foreground placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
        />
        <div className="mt-2 text-right">
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:text-green-700"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !email || !password}
        className="w-full rounded-full bg-black px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>

      {error && (
        <div className="mt-4 text-red-600">
          {error.message || "An error occurred. Please try again."}
        </div>
      )}

      <div className="text-center">
        <span className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-primary hover:text-primary-hover"
          >
            Register
          </Link>
        </span>
      </div>
    </form>
  );
}

export default LoginForm;
