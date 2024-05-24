"use client";

import { makePostRequest } from "@/utils/apiRequest";
import { Category, SimplifiedData } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../form/Button";
import ImageInput from "../form/ImageInput";
import TextAreaInput from "../form/TextAreaInput";
import TextInput from "../form/TextInput";

const CategoryForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Category>();

  const router = useRouter();
  const handleSubmitClick: SubmitHandler<Category> = async (data: Category) => {
    data.image = imageUrl;
    await makePostRequest({
      setLoading,
      endpoint: "api/products",
      data,
      resourceName: "Product",
      reset,
      redirect: () => router.push("/categories"),
    }).then(() => setImageUrl(""));
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitClick)}
      className="w-full max-w-4xl p-3 bg-white  errors border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          name="title"
          label="Category title"
          register={register}
          errors={errors}
        />
        <TextAreaInput
          name="description"
          label="Category description"
          register={register}
          errors={errors}
          isRequired={false}
        />

        <ImageInput
          label="Product image"
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
          endpoint="categoryUploader"
        />
      </div>
      <Button
        buttonTitle="Create Category"
        loadTitle="Creating..."
        isLoading={loading}
        type="submit"
      />
    </form>
  );
};

export default CategoryForm;
