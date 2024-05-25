"use client";
import { ProductListDisplay } from "@/utils/types";
import ProductDataCard from "./ProductDataCard";
import { FC } from "react";
type ProductTableProps = {
  data: ProductListDisplay[];
};
const ProductTable: FC<ProductTableProps> = ({ data }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            Name of Product
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Stock info
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((product: ProductListDisplay) => (
          <ProductDataCard key={product.id} data={product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
