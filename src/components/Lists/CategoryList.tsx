"use client";
import { useEffect, useRef } from "react";
import CategoriesDataCard from "../cards/CategoriesDataCard";
import { Category } from "@/utils/types";
import { getData } from "@/utils/getData";
import useDataProvider from "@/hooks/useDataProvider";

const CategoryList = () => {
  const { token } = useDataProvider();
  const categories = useRef<Category[]>([]);
  useEffect(() => {
    getData("categories", token.current).then(
      (res) => (categories.current = res)
    );
  }, [token]);

  return (
    <div className="grid grid-col-1 gap-3">
      {categories.current.map((category) => (
        <CategoriesDataCard key={category.id} data={category} />
      ))}
    </div>
  );
};

export default CategoryList;
