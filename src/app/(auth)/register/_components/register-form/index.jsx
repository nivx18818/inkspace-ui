"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Link from "next/link";
import authThunks from "@/store/thunks/auth.thunks";
import useAuth from "@/store/hooks/use-auth";

function RegisterForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { success, isLoading, error } = useAuth();

  useEffect(() => {
    if (success) {
      router.push("/email-sent?type=register");
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, username, email, password };
    dispatch(authThunks.register(userData));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-foreground placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose a username"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-foreground placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

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
          placeholder="Create a password"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-foreground placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading || !name || !username || !email || !password}
        className="w-full rounded-full bg-black px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {isLoading ? "Creating account..." : "Create Account"}
      </button>

      {error && (
        <div className="mt-4 text-red-600">
          {error.message || "An error occurred. Please try again."}
        </div>
      )}

      <div className="text-center">
        <span className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-primary-hover">
            Login
          </Link>
        </span>
      </div>
    </form>
  );
}

export default RegisterForm;
