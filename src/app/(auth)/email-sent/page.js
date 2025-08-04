"use client";

import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { authThunks } from "@/store/thunks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function EmailSent() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const { type, email: encodedEmail } = Object.fromEntries(
    searchParams.entries(),
  );
  const email = encodedEmail ? decodeURIComponent(encodedEmail) : "your email";

  const actions = {
    register: {
      title: "Registration successful",
      message: `A confirmation email has been sent to ${email}. Please check your inbox to verify your account.`,
      run: () => dispatch(authThunks.resendVerification(email)),
    },
    reset: {
      title: "Password reset link sent",
      message: `A password reset link has been sent to ${email}. Please check your inbox.`,
      run: () => dispatch(authThunks.resendReset(email)),
    },
  };

  const action = actions[type] ?? {
    title: "Email sent",
    message: `An email has been sent to ${email}. Please check your inbox.`,
    run: null,
  };

  return (
    <div className="flex items-center justify-center bg-background px-4">
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
        <h1 className="mb-4 text-2xl font-bold text-foreground">
          {action.title}
        </h1>

        {/* Message */}
        <p className="mb-8 leading-relaxed text-balance text-muted-foreground">
          {action.message}
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Didn&apos;t receive the email? Check your spam folder
            {action.run && encodedEmail && (
              <>
                {" "}
                or{" "}
                <button
                  className="text-primary underline hover:text-primary-hover"
                  onClick={action.run}
                >
                  resend email
                </button>
              </>
            )}
            {"."}
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
