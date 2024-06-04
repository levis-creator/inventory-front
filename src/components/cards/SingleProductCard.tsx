"use client";
import Image from "next/image";
import PrimaryButton from "../form/PrimaryButton";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Product } from "@/utils/types";
import { getData } from "@/utils/getData";

const SingleProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    !product && getData(`products/${id}`).then((data) => setProduct(data));
  }, [product, id]);

  console.log(product);
  return (
    <div className="p-8  bg-white border border-gray-200 rounded-lg shadow md:max-w-xl  dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col items-center md:flex-row ">
        <Image
          width={0}
          height={0}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-52 md:rounded-none md:rounded-s-lg"
          src={product?.image ?? ""}
          unoptimized
          alt={product?.name ?? ""}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product?.name}
          </h5>
          <div className="mb-3 flex flex-col font-normal text-gray-700 dark:text-gray-400">
            <span>{product?.id}</span>
            <span>{product?.brand}</span>
            <span>{product?.category}</span>
            <span>{product?.price}</span>
            <span>{product?.quantity} in stock</span>
          </div>

          <div className="inline-flex gap-2">
            <PrimaryButton className="bg-black text-white px-8 rounded-md py-2">
              Delete
            </PrimaryButton>

            <PrimaryButton className=" border-2 border-blue-500 text-blue-600 px-8 rounded-md py-2">
              Edit
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-500">Stores Avaiable</h3>
      </div>
    </div>
  );
};

export default SingleProductCard;
