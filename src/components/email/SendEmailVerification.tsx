"use client";

import { authClient } from "@/lib/authClient";
import React from "react";
import toast from "react-hot-toast";

const SendEmailVerification = ({ email }: { email: string }) => {
  return (
    <React.Fragment>
      <main className="w-full mx-auto max-w-3xl min-h-screen flex justify-center items-center">
        <div className="text-center">
          <p className="text-red-500  text-xl tracking-widest font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            porro autem explicabo.
          </p>
          <button
            className="px-4 py-2 rounded-2xl bg-slate-400 mt-6 hover:bg-slate-600 text-sm tracking-wider line-clamp-loop"
            type="button"
            onClick={async () => {
              const { data, error } = await authClient.sendVerificationEmail({
                email,
                callbackURL: "/",
              });
              if (error) {
                toast.error("email verification error!", { duration: 3000 });
              }
              if (data?.status) {
                toast.success(`verification email send to your ${email}`);
              }
            }}
          >
            Resend Verification Email
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SendEmailVerification;
