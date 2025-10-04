import LoginForm from "@/components/auth/LoignForm";
import React from "react";

const SignInPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <LoginForm />
      </main>
    </React.Fragment>
  );
};

export default SignInPage;
