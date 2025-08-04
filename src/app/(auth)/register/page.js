import AuthTrailing from "../_components/auth-trailing";
import RegisterForm from "./_components/register-form";
import RegisterLeading from "./_components/register-leading";

function Register() {
  return (
    <div className="w-full max-w-md">
      <RegisterLeading />
      <RegisterForm />
      <AuthTrailing />
    </div>
  );
}

export default Register;
