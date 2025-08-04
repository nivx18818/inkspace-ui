function AuthTrailing() {
  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <p className="text-center text-xs leading-relaxed text-gray-500">
        By continuing, you agree to Inkspace&apos;s{" "}
        <a
          href="/terms"
          className="underline hover:text-gray-700"
          target="_blank"
        >
          Terms of Service
        </a>{" "}
        and acknowledge that Inkspace&apos;s{" "}
        <a
          href="/privacy"
          className="underline hover:text-gray-700"
          target="_blank"
        >
          Privacy Policy
        </a>{" "}
        applies to you.
      </p>
    </div>
  );
}

export default AuthTrailing;
