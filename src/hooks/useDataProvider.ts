"use client";
import { DataContext } from "@/context/DataProvider";
import { useContext } from "react";

const useDataProvider = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw Error("Data context not used correctly");
  }
  return context;
};

export default useDataProvider;
