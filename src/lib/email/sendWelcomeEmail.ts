import { sendEmail } from "./sendEmail"


export async function sendWelcomeEmail({ user }: {
    user: { email: string, name: string },

}) {
    return sendEmail({
        from: process.env.RESEND_FROM_EMAIL!,
        to: user?.email,
        subject: 'Welcome Email',
        html: `
            Welcome ! ${user?.name}
        `
    })
}