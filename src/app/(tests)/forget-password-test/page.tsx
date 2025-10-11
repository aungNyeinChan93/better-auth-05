"use client";

import { authClient } from "@/lib/authClient";
import React, { ChangeEvent, useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Enter your Email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <button
            type="button"
            onClick={() => {
              authClient.requestPasswordReset({
                email,
                redirectTo: "/auth/forgetPassword",
              });
            }}
          >
            Forget Password
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ForgetPassword;
