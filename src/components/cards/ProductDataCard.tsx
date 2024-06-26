"use client";
import { ProductListDisplay } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
type ProductDataCardProps = {
  data: ProductListDisplay;
};
const ProductDataCard: FC<ProductDataCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <tr
      onClick={() => router.push(`/products/${data.id}`)}
      className="table-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Image
          src={data.image}
          alt={data.name}
          width={0}
          height={0}
          className="w-10 h-10 rounded-full"
          unoptimized
        />
        <div className="ps-3">
          <div className="text-base font-semibold">{data.name}</div>
        </div>
      </th>
      <td className="px-6 py-4">available</td>
      <td className="px-6 py-4">{data.quantity} in stock</td>
      <td className="px-6 py-4">{data.category}</td>
    </tr>
  );
};

export default ProductDataCard;
