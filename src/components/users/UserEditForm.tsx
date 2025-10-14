"use client";

import { authClient } from "@/lib/authClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export const ProfileUpdateSchema = z.object({
  name: z.string().min(1, "name field is required!"),
  email: z.email("email field is required!"),
});
export type ProfileUpdateType = z.infer<typeof ProfileUpdateSchema>;

const UserEditForm = ({
  user,
}: {
  user: Partial<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined | undefined;
    role?: string | null | undefined;
  }>;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ProfileUpdateType>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
    resolver: zodResolver(ProfileUpdateSchema),
  });

  const updateProfile = async (formData: ProfileUpdateType) => {
    let promises = [
      authClient.updateUser({
        name: formData.name,
        // fetchOptions: {
        //   onSuccess: () => {
        //     return router.push("/user-dashboard");
        //   },
        // },
      }),
    ];

    if (formData.email !== user?.email) {
      promises.push(
        authClient.changeEmail({
          newEmail: formData.email,
          callbackURL: "/auth/sign-in",
          //   fetchOptions: {
          //     onSuccess: () => {
          //       router.push("/auth/sign-in");
          //     },
          //   },
        })
      );
    }

    await Promise.all(promises);
    return router.push("/user-dashboard");
  };

  return (
    <React.Fragment>
      <main>
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
            <h1 className="mb-4 text-2xl font-bold text-center">
              Profile Update Form
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit(updateProfile)}>
              <p className="text-red-600">
                {errors?.name && errors?.name?.message}
              </p>

              <input
                type="text"
                placeholder="name"
                className="w-full rounded-lg border p-2"
                {...register("name")}
              />
              <p className="text-red-600">
                {errors?.email && errors?.email?.message}
              </p>

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border p-2"
                {...register("email")}
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UserEditForm;
