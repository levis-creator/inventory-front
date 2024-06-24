"use client";
import { makePostRequest } from "@/utils/apiRequest";
import { LoginData } from "@/utils/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../form/TextInput";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<LoginData>();
  const handleLogin: SubmitHandler<LoginData> = async (data: LoginData) => {
    await makePostRequest({
      setLoading,
      endpoint: "/api/auth/login",
      data,
      reset,
      redirect: () => router.push("/products"),
      successMessage: "Login success",
      failedMessage: "Login failed",
    });
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <TextInput
            name="email"
            label="email"
            type="email"
            register={register}
            errors={errors}
            placeholder="name@company.com"
          />

          <TextInput
            name="password"
            label="password"
            type="password"
            register={register}
            errors={errors}
            placeholder="••••••••"
          />

          <div className="flex items-center justify-between">
            {/* remember input */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required={true}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
          </button>

          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              href="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
