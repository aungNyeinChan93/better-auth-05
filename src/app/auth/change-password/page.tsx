import ChangePasswordForm from "@/components/auth/ChangePasswordForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const ChangePasswordPage = async () => {
  const accounts = await auth.api.listUserAccounts({
    headers: await headers(),
  });

  const isHasPasswordAccount =
    accounts && accounts?.some((a) => a.providerId == "credential");

  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        {isHasPasswordAccount ? (
          <ChangePasswordForm />
        ) : (
          <Link
            className="px-4 py-2 bg-green-500 text-white rounded-2xl"
            href={"/forget-password-test"}
          >
            {/* {" Password Less"} */}
            Resend Email
          </Link>
        )}
      </main>
    </React.Fragment>
  );
};

export default ChangePasswordPage;
