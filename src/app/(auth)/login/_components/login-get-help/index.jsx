function LoginGetHelp() {
  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-muted-foreground">
        Forgot email or trouble signing in?{" "}
        <a
          href="/help"
          className="font-medium text-primary hover:text-green-700"
        >
          Get help
        </a>
      </p>
    </div>
  );
}

export default LoginGetHelp;
