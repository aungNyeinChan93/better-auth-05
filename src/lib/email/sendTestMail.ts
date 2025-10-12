import { sendEmail } from "./sendEmail";



export async function sendTestMail({ user }: { user: { email: string } }) {

    return sendEmail({
        from: process.env.RESEND_FROM_EMAIL!,
        to: user?.email,
        subject: 'Test Mail',
        html: "this is test mail to " + user?.email
    })
}