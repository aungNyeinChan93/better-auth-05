import LogoutBtn from "@/components/auth/LogoutBtn";
import {
  getServerSession,
  ServerSession,
} from "@/features/profile/profile-server";
import { tryCatch } from "@/helpers/try-catch";
import React from "react";

const ProfilePage = async () => {
  const [session, error] = await tryCatch<ServerSession>(getServerSession);
  console.log(error);

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }
  return (
    <React.Fragment>
      <main>
        {session && <LogoutBtn />}

        <pre>{session && JSON.stringify(session, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default ProfilePage;
