import LogoutBtn from "@/components/auth/LogoutBtn";
import {
  getServerSession,
  ServerSession,
} from "@/features/profile/profile-server";
import { tryCatch } from "@/helpers/try-catch";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const [session, error] = await tryCatch<ServerSession>(getServerSession);

  if (!session?.user?.emailVerified) {
    return redirect("/auth/email-verification");
  }
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
