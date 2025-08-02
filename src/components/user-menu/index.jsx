"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import useCurrentUser from "@/store/hooks/user-current-user";
import authThunks from "@/store/thunks/auth.thunks";

function UserMenu() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useCurrentUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    setIsDropdownOpen(false);
    dispatch(authThunks.logout());
    router.push("/login");
  };

  const getDefaultAvatar = () => {
    if (user?.profile?.avatar) {
      return user.profile.avatar;
    }

    // Create a default avatar with user initials or generic avatar
    const userName = user?.name || user?.email || "User";

    // Using a service like UI Avatars for initials-based avatar
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=000000&color=ffffff&size=128&format=png`;
  };

  return (
    <>
      {user && (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 rounded-full p-1 hover:bg-gray-100"
          >
            <img
              src={getDefaultAvatar()}
              alt="User Avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
          </button>

          {isDropdownOpen && (
            <div className="ring-opacity-5 absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black">
              <a
                href="/profile"
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
                <span>Profile</span>
              </a>
              <a
                href="/settings"
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                <FontAwesomeIcon icon={faCog} className="h-4 w-4" />
                <span>Settings</span>
              </a>
              <button
                onClick={handleLogout}
                className="flex w-full items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default UserMenu;
