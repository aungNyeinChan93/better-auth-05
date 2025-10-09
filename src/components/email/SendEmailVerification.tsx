"use client";

import { authClient } from "@/lib/authClient";
import React from "react";
import toast from "react-hot-toast";

const SendEmailVerification = ({ email }: { email: string }) => {
  return (
    <React.Fragment>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          porro autem explicabo.
        </p>
        <button
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
              toast.success(`verification email send to you ${email}`);
            }
          }}
        >
          Resend Verification Email
        </button>
      </main>
    </React.Fragment>
  );
};

export default SendEmailVerification;
