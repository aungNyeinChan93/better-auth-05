import { getServerSession } from "@/features/profile/profile-server";
import { sendTestMail } from "@/lib/email/sendTestMail";
import React, { use } from "react";

const MailTestPage = () => {
  const session = use(getServerSession());
  session && use(sendTestMail({ user: session?.user! }));
  return (
    <React.Fragment>
      <main> Send Was Test Mail</main>
    </React.Fragment>
  );
};

export default MailTestPage;
