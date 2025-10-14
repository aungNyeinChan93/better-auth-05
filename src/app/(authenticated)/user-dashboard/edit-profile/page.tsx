import UserEditForm from "@/components/users/UserEditForm";
import {
  getServerSession,
  ServerSession,
} from "@/features/profile/profile-server";
import { tryCatch } from "@/helpers/try-catch";
import React from "react";

const EditProfilePage = async () => {
  const [session] = await tryCatch<ServerSession>(getServerSession);

  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        {session && <UserEditForm user={session?.user!} />}
      </main>
    </React.Fragment>
  );
};

export default EditProfilePage;
