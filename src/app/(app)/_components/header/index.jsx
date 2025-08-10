import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEdit } from "@fortawesome/free-solid-svg-icons";
import UserMenu from "@/components/user-menu";

function Header() {
  return (
    <header className="sticky top-0 z-50 h-18 border-b border-gray-200 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-foreground">
              Inkspace
            </a>
            {/* <nav className="hidden items-center space-x-6 md:flex">
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
            </nav> */}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/posts/create"
              className="hidden items-center space-x-2 rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-800 md:flex"
            >
              <FontAwesomeIcon icon={faEdit} className="h-4 w-4" />
              <span>Write</span>
            </a>
            {/* <button className="p-2 text-muted-foreground hover:text-foreground">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
            </button> */}

            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
