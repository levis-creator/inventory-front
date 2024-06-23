"use client";
import React from "react";
import TextInput from "../form/TextInput";
import { useForm } from "react-hook-form";
import Link from "next/link";

const RegistrationForm = () => {
  const { register, formState: errors } = useForm();
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create an account
      </h1>
      <form className="space-y-4 md:space-y-6" action="#">
        <TextInput
          name="userName"
          label="first and last name"
          type="text"
          register={register}
          errors={errors}
          placeholder="John Doe"
          isRequired={true}
        />

        <TextInput
          name="email"
          label="email"
          type="email"
          register={register}
          errors={errors}
          placeholder="name@company.com"
          isRequired={true}
        />
        <TextInput
          name="password"
          label="password"
          type="password"
          register={register}
          errors={errors}
          placeholder="••••••••"
          isRequired={true}
        />
        <TextInput
          name="passwordCon"
          label="Confirm password"
          type="password"
          register={register}
          errors={errors}
          placeholder="••••••••"
          isRequired={true}
        />
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="terms"
              className="font-light text-gray-500 dark:text-gray-300"
            >
              I accept the{" "}
              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create an account
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
