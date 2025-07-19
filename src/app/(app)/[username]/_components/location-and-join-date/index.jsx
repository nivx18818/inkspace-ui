import { faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LocationAndJoinDate({ user, profile }) {
  return (
    <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-600">
      {profile.location && (
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4" />
          <span>{profile.location}</span>
        </div>
      )}
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faCalendarAlt} className="h-4 w-4" />
        <span>
          Joined{" "}
          {new Date(user.createdAt).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}

export default LocationAndJoinDate;
