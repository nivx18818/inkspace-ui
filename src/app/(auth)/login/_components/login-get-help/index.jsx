function LoginGetHelp() {
  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-600">
        Forgot email or trouble signing in?{" "}
        <a
          href="/help"
          className="font-medium text-green-600 hover:text-green-700"
        >
          Get help
        </a>
      </p>
    </div>
  );
}

export default LoginGetHelp;
