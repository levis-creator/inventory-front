"use client";
import Navbar from "@/components/navigation/Navbar";
import SideBar from "@/components/navigation/SideBar";
import { FC, ReactNode, useState } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="font-sans">
      <Navbar showSideBar={showSideBar} handleSideBar={handleSideBar} />
      {showSideBar && (
        <SideBar showSideBar={showSideBar} handleSideBar={handleSideBar} />
      )}
      <main
        className={`${
          showSideBar && "ml-64 "
        } px-14 bg-gray-700 min-h-screen mt-16 p-9 relative`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
