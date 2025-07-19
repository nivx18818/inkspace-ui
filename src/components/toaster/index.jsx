"use client";

import { Slide, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function Toaster() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      limit={2}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      closeButton={false}
      rtl={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      theme="colored"
      transition={Slide}
      className="text-sm select-none"
      icon={({ type }) => {
        switch (type) {
          case "success":
            return <FontAwesomeIcon icon={faCircleCheck} />;
          case "error":
            return <FontAwesomeIcon icon={faCircleXmark} />;
          default:
            return null;
        }
      }}
    />
  );
}

export default Toaster;
