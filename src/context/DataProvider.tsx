"use client";
import { Session } from "next-auth";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<any>(null);
const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session>();
  const token = useRef<string | null | undefined>(session?.user.accessToken);
  return (
    <DataContext.Provider value={{ session, setSession, token }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
