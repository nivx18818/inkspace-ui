import LoginForm from "./_components/login-form";
import SignInWith from "./_components/sign-in-with";
import LoginLeading from "./_components/login-leading";
import LoginGetHelp from "./_components/login-get-help";
import LoginTrailing from "./_components/login-trailing";

function Login() {
  return (
    <div className="w-full max-w-md">
      <LoginLeading />
      <LoginForm />
      <SignInWith />
      <LoginGetHelp />
      <LoginTrailing />
    </div>
  );
}

export default Login;
