import { getServerSession } from "@/features/profile/profile-server";
import { tryCatch } from "@/helpers/try-catch";
import { redirect } from "next/navigation";
import React, { use } from "react";

const AdminUsersPage = () => {
  const [session, err] = use(tryCatch(getServerSession));
  if (err) return <>{err}</>;

  if (session?.user?.role !== "admin") {
    return redirect("/");
  }
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default AdminUsersPage;
