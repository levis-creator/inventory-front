"use client";
import Navbar from "@/components/navigation/Navbar";
import SideBar from "@/components/navigation/SideBar";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import Loading from "../loading";
import useDataProvider from "@/hooks/useDataProvider";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const { theme } = useTheme();
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const { setSession } = useDataProvider();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/signin");
    },
  });
  const loading = useRef<boolean>(true);
  useEffect(() => {
    if (!session) {
      setSession(session);
      loading.current = false;
    } else {
      loading.current = false;
    }
  }, [session, setSession]);
  console.log({ session });
  return (
    <>
      {loading.current ? (
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
