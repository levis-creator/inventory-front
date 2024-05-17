import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <form action="#" method="GET" className="hidden lg:block lg:pl-2">
      <label htmlFor="topbar-search" className="sr-only">
        Search
      </label>
      <div className="relative mt-1 lg:w-96">
        <input
          type="text"
          name="email"
          id="topbar-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pr-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search"
        />
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
          <Search />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
