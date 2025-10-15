"use client";

import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteAccount = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <main>
        <button
          type="button"
          onClick={() => {
            authClient.deleteUser(
              { callbackURL: "/auth/resend-delete" },
              {
                onSuccess: () => {
                  router.push("/");
                },
              }
            );
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-2xl"
        >
          Delete Account
        </button>
      </main>
    </React.Fragment>
  );
};

export default DeleteAccount;
