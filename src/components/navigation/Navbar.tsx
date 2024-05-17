import React, { FC } from "react";
import SearchInput from "../form/SearchInput";

import { AlignJustify, Bell, Search, User } from "lucide-react";
import Logo from "./Logo";
type NavbarProps = {
  showSideBar: boolean;
  handleSideBar: () => void;
};
const Navbar: FC<NavbarProps> = ({ showSideBar, handleSideBar }) => {
  return (
    <header className="antialiased fixed top-0 left-0 right-0 z-20 ">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            {!showSideBar && (
              <button
                onClick={handleSideBar}
                className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <AlignJustify />
                <span className="sr-only">Menu</span>
              </button>
            )}
            <Logo />

            <SearchInput />
          </div>
          <div className="flex items-center lg:order-2">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Search</span>
              <Search />
            </button>
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">View notifications</span>
              <Bell />
            </button>
            <button
              type="button"
              className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <span className="sr-only">User menu</span>
              <User />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
