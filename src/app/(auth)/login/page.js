import AuthTrailing from "../_components/auth-trailing";
import LoginForm from "./_components/login-form";
import LoginLeading from "./_components/login-leading";

function Login() {
  return (
    <div className="w-full max-w-md">
      <LoginLeading />
      <LoginForm />
      <AuthTrailing />
    </div>
  );
}

export default Login;
