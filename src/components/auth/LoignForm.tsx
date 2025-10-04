"use client";

import { authClient } from "@/lib/authClient";
import { LoginSchema, LoginType } from "@/lib/zod_schema/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginSubmit = async (formData: LoginType) => {
    try {
      await authClient.signIn.email(
        { ...formData },
        {
          onSuccess: () => {
            toast.success("Login success!", { duration: 3000 });
            router.push("/");
            return;
          },
          onError: (err) => {
            throw new Error(
              err instanceof Error ? err?.message : "sign-in fail"
            );
          },
        }
      );
    } catch (error) {
      toast.error(error instanceof Error ? error?.message : "sign-in fail");
    }
  };
  return (
    <React.Fragment>
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Sign In</h1>

        <form className="space-y-4" onSubmit={handleSubmit(loginSubmit)}>
          <p className="text-red-600">
            {errors?.email && errors?.email?.message}
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-2"
            {...register("email")}
          />
          <p className="text-red-600">
            {errors?.password && errors?.password?.message}
          </p>
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-2"
            {...register("password")}
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        <button
          type="button"
          //   onClick={() => signIn("github", { callbackUrl: "/" })}
          className="mb-2 w-full rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900"
        >
          Continue with GitHub
        </button>
        <button
          type="button"
          //   onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
        >
          Continue with Google
        </button>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
