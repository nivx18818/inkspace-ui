import RegisterForm from "./_components/register-form";
import RegisterLeading from "./_components/register-leading";
import RegisterTrailing from "./_components/register-trailing";

function Register() {
  return (
    <div className="w-full max-w-md">
      <RegisterLeading />
      <RegisterForm />
      <RegisterTrailing />
    </div>
  );
}

export default Register;
