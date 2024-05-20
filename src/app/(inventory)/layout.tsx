"use client";
import Navbar from "@/components/navigation/Navbar";
import SideBar from "@/components/navigation/SideBar";
import { useTheme } from "next-themes";
import { FC, ReactNode, useState } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const { theme } = useTheme();
  console.log(theme);
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="font-sans bg-slate-50 dark:text-white dark:bg-gray-700">
      <Navbar showSideBar={showSideBar} handleSideBar={handleSideBar} />
      {showSideBar && (
        <SideBar showSideBar={showSideBar} handleSideBar={handleSideBar} />
      )}
      <main
        className={`${
          showSideBar && "md:ml-64 "
        } px-14 min-h-screen mt-15 py-24 p-9`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
