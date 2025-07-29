import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const SwitchButton = ({ currentView, handleToggle }) => {
  const isPreview = currentView === "preview";

  return (
    <button
      type="button"
      aria-label={isPreview ? "Switch to Edit" : "Switch to Preview"}
      title={isPreview ? "Switch to Edit" : "Switch to Preview"}
      onClick={handleToggle}
      className={clsx(
        "fixed right-8 bottom-8 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-200",
        "flex items-center justify-center border border-gray-200",
        isPreview
          ? "bg-primary text-white hover:bg-primary-hover"
          : "bg-white text-muted-foreground hover:bg-gray-50",
      )}
      style={{
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      }}
    >
      <FontAwesomeIcon icon={faEye} className="text-xl" />
    </button>
  );
};

export default SwitchButton;
