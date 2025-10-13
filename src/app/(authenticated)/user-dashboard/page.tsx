import Profile from "@/components/users/Profile";
import {
  getServerSession,
  ServerSession,
} from "@/features/profile/profile-server";
import { tryCatch } from "@/helpers/try-catch";
import React from "react";

const UserDashboardPage = async () => {
  const [session, err] = await tryCatch<ServerSession>(getServerSession);
  const user = session && session?.user;

  if (err) return <>{err}</>;
  return (
    <React.Fragment>
      <main className="w-full min-h-screen ">
        <Profile user={user} />
      </main>
    </React.Fragment>
  );
};

export default UserDashboardPage;
