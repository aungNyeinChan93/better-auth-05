"use client";
import { authClient } from "@/lib/authClient";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const token = searchParam.get("token");
  const [newPassword, setNewPassword] = useState("");

  if (!token) {
    return null;
  }

  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <div>
          <input
            type="password"
            name="new-password"
            id="new-password"
            placeholder="new Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewPassword(e.target.value)
            }
          />
        </div>
        <button
          type="button"
          onClick={() => {
            authClient.resetPassword(
              {
                newPassword,
                token: token!,
              },
              {
                onSuccess: async () => {
                  await authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        toast.success("sign-out success", { duration: 3000 });
                        return router.push("/auth/sign-in");
                      },
                    },
                  });
                },
              }
            );
          }}
        >
          Change Password
        </button>
      </main>
    </React.Fragment>
  );
};

export default ForgetPassword;
