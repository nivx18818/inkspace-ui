import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

async function EmailSent({ searchParams }) {
  const { type } = await searchParams;
  const messages = {
    register:
      "Registration successful! Please check your email to verify your account.",
    reset: "Password reset email sent! Please check your inbox.",
  };

  const titles = {
    register: "Check your email",
    reset: "Password reset sent",
  };

  const message =
    messages[type] || "Please check your email for further instructions.";
  const title = titles[type] || "Email sent";

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        {/* Email Icon */}
        <div className="mb-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl text-primary"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-foreground">{title}</h1>

        {/* Message */}
        <p className="mb-8 leading-relaxed text-gray-600">{message}</p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Didn&apos;t receive the email? Check your spam folder or{" "}
            <button className="text-primary underline hover:text-primary-hover">
              resend email
            </button>
          </p>

          <Link
            href="/login"
            className="inline-flex items-center font-medium text-primary hover:text-primary-hover"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-sm" />
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmailSent;
