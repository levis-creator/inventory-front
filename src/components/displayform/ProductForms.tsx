"use client";

import { makePostRequest } from "@/utils/apiRequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../form/Button";
import ImageInput from "../form/ImageInput";
import SelectInput from "../form/SelectInput";
import TextAreaInput from "../form/TextAreaInput";
import TextInput from "../form/TextInput";
import ToggleInput from "../form/ToggleInput";
import { Product, SimplifiedData } from "@/utils/types";

const ProductForms = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const categories: SimplifiedData[] = [];
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Product>({
    defaultValues: {
      isAvailable: true,
    },
  });
  const isAvailable = watch("isAvailable");
  const router = useRouter();
  const handleSubmitClick: SubmitHandler<Product> = async (data: Product) => {
    data.image = imageUrl;
    await makePostRequest({
      setLoading,
      endpoint: "api/products",
      data,
      resourceName: "Product",
      reset,
      redirect: () => router.push("/products"),
    }).then(() => setImageUrl(""));
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitClick)}
      className="w-full max-w-4xl p-3 bg-white  errors border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          name="name"
          label="Product name"
          register={register}
          errors={errors}
        />
        <TextAreaInput
          name="description"
          label="Product description"
          register={register}
          errors={errors}
        />
        <TextInput
          name="price"
          label="Product price"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          name="quantity"
          label="Product quantity"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          name="SKU"
          label="Product SKU"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          label="Select Categories"
          name="categories"
          register={register}
          options={categories}
          className="w-full"
        />
        <ImageInput
          label="Product image"
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
          endpoint="productUploader"
        />
        <ToggleInput
          trueTitle="Publish"
          falseTitle="Draft"
          label="Publish  Product"
          name="isPublished"
          register={register}
          isActive={isAvailable}
          checked={true}
        />
      </div>
      <Button
        buttonTitle="Create Product"
        loadTitle="Creating..."
        isLoading={loading}
        type="submit"
      />
    </form>
  );
};

export default ProductForms;
