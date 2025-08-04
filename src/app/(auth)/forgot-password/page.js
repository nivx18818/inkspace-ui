import ForgotPasswordForm from "./_components/forgot-password-form";
import ForgotPasswordLeading from "./_components/forgot-password-leading";

function ForgotPassword() {
  return (
    <div className="w-full max-w-md">
      <ForgotPasswordLeading />
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPassword;
