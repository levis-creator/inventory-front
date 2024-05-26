"use client";
import Image from "next/image";
import IconButton from "../form/IconButton";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Category } from "@/utils/types";
import { FC } from "react";
type CategoriesDataCardProps = {
  data: Category;
};
const CategoriesDataCard: FC<CategoriesDataCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <div className="flex flex-grow items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <Image
          src={data.image}
          alt={data.title}
          width={0}
          height={0}
          className="w-10 h-10 rounded-full"
          unoptimized
        />
        <div className="ps-3">
          <div className="text-base font-semibold">{data.title} </div>
          <div>{data.items_count} items</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <IconButton
          icon={<ArrowRight />}
          iconDescription="category"
          onClick={() => router.push(`/categories/${data.id}`)}
        />
      </div>
    </div>
  );
};

export default CategoriesDataCard;
