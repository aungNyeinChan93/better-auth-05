import { sendEmail } from "./sendEmail"

export async function sendResetPasswordEmail({ user, url }: {
    user: { name: string, email: string },
    url: string
}) {
    return sendEmail({
        from: process.env.RESEND_FROM_EMAIL!,
        subject: 'reset-password email verification',
        to: user?.email,
        html: `
           ${user.name} || ${url}
        `
    })
}