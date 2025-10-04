"use client";

import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const LogoutBtn = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <button
        className="px-4 py-2 rounded-2xl bg-indigo-500"
        type="button"
        onClick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                toast.success("sign-out success", { duration: 3000 });
                return router.push("/auth/sign-in");
              },
            },
          });
        }}
      >
        Logout
      </button>
    </React.Fragment>
  );
};

export default LogoutBtn;
