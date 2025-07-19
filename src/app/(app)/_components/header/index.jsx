"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/store/hooks/user-current-user";
import authThunks from "@/store/thunks/auth.thunks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useCurrentUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    dispatch(authThunks.logout());
    router.push("/login");
  };

  const getDefaultAvatar = () => {
    if (user?.Profile?.avatar) {
      return user.Profile.avatar;
    }

    // Create a default avatar with user initials or generic avatar
    const userName = user?.name || user?.email || "User";

    // Using a service like UI Avatars for initials-based avatar
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=000000&color=ffffff&size=128&format=png`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-foreground">
              Inkspace
            </a>
            <nav className="hidden items-center space-x-6 md:flex">
              <a
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Our story
              </a>
              <a
                href="/membership"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Membership
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/posts/create"
              className="hidden items-center space-x-2 rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-800 md:flex"
            >
              <FontAwesomeIcon icon={faEdit} className="h-4 w-4" />
              <span>Write</span>
            </a>
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
            </button>

            {user && (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 rounded-full p-1 hover:bg-gray-100"
                >
                  <img
                    src={getDefaultAvatar()}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full object-cover"
                    onError={(e) => {
                      // Fallback to a simple colored circle with initials if image fails to load
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="hidden h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white"
                    style={{ display: "none" }}
                  >
                    {(user?.Profile?.name || user?.name || user?.email || "U")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </div>
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
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="h-4 w-4"
                      />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
