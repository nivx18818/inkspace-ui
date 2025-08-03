import LoginForm from "./_components/login-form";
import LoginLeading from "./_components/login-leading";
import LoginTrailing from "./_components/login-trailing";

function Login() {
  return (
    <div className="w-full max-w-md">
      <LoginLeading />
      <LoginForm />
      <LoginTrailing />
    </div>
  );
}

export default Login;
