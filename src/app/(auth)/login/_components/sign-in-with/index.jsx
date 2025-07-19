import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

function SignInWith() {
  return (
    <div className="mt-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-3 text-gray-500">
            Or sign in with
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-background px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
        >
          <FontAwesomeIcon icon={faGoogle} fontSize={24} className="mr-2" />
          Google
        </button>

        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-background px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
        >
          <FontAwesomeIcon icon={faTwitter} fontSize={24} className="mr-2" />
          Twitter
        </button>
      </div>
    </div>
  );
}

export default SignInWith;
