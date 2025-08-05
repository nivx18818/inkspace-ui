import AuthTrailing from "../_components/auth-trailing";
import ResetPasswordForm from "./_components/reset-password-form";
import ResetPasswordLeading from "./_components/reset-password-leading";

function ResetPassword() {
  return (
    <div className="w-full max-w-md">
      <ResetPasswordLeading />
      <ResetPasswordForm />
      <AuthTrailing />
    </div>
  );
}

export default ResetPassword;
