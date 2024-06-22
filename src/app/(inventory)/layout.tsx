"use client";
import Navbar from "@/components/navigation/Navbar";
import SideBar from "@/components/navigation/SideBar";
import { getServerSession } from "next-auth";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";
import Loading from "../loading";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const { theme } = useTheme();
  console.log(theme);
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/login");
    },
  });
  const loading = useRef<boolean>(true);
  useEffect(() => {
    if (!session) {
      session;
      loading.current = true;
    }
  }, [session]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default Layout;
