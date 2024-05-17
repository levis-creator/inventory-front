"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../form/Button";
import TextInput from "../form/TextInput";
import TextAreaInput from "../form/TextAreaInput";
import SelectInput from "../form/SelectInput";
export type Products = {
  name: string;
  description?: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  status: boolean;
  SKU: string;
};
export type SimplifiedData = {
  id: string | number;
  name: string;
};

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
  } = useForm<Products>();

  const handleSubmitClick = (data: Products) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitClick)}
      className="w-full max-w-4xl p-4 bg-white  errors border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
        <SelectInput
          label="Select Categories"
          name="categories"
          register={register}
          options={categories}
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
