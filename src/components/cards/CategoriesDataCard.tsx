import Image from "next/image";
import IconButton from "../form/IconButton";
import { ArrowRight } from "lucide-react";

const CategoriesDataCard = () => {
  return (
    <div className="flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <div className="flex flex-grow items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <Image
          src="/prod1.png"
          alt="Jese image"
          width={0}
          height={0}
          className="w-10 h-10 rounded-full"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">Levis tshirts </div>
          <div>10 items</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <IconButton icon={<ArrowRight />} iconDescription="category" />
      </div>
    </div>
  );
};

export default CategoriesDataCard;
