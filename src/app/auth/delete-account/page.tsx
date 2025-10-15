import DeleteAccount from "@/components/auth/DeleteAccount";
import React from "react";

const DeleteAccountPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <DeleteAccount />
      </main>
    </React.Fragment>
  );
};

export default DeleteAccountPage;
