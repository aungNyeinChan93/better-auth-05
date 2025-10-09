import SendEmailVerification from "@/components/email/SendEmailVerification";
import { getServerSession } from "@/features/profile/profile-server";
import React from "react";

const EmailVerificationPage = async () => {
  const session = await getServerSession();

  return (
    <React.Fragment>
      <main>
        <SendEmailVerification email={session?.user?.email!} />
      </main>
    </React.Fragment>
  );
};

export default EmailVerificationPage;
