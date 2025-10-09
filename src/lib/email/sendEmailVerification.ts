import { email } from "zod"
import { sendEmail } from "./sendEmail"

export async function sendEmailVarification({ user, url }: {
    user: { name: string, email: string },
    url: string
}) {
    return sendEmail({
        from: process.env.RESEND_FROM_EMAIL!,
        to: user.email,
        html: `
           <body style="margin:0;padding:0;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;background:#f3f4f6;">

  <!-- Preheader (hidden) -->
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">Verify your email address to finish setting up your account.</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 0;border-collapse:collapse;">
    <tr>
      <td align="center">

        <!--[if mso]><table role="presentation" width="600" align="center"><tr><td><![endif]-->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 18px rgba(15,23,42,0.06);border-collapse:collapse;">

          <!-- Header -->
          <tr>
            <td style="padding:20px 28px;border-bottom:1px solid #eef2f7;vertical-align:middle;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="vertical-align:middle;padding-right:12px;"><img src="{{LOGO_URL}}" alt="{{BRAND_NAME}}" width="40" height="40" style="display:block;border-radius:6px;object-fit:contain;border:0;" /></td>
                  <td style="vertical-align:middle;font-size:16px;font-weight:700;color:#0f172a;">{{BRAND_NAME}}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="padding:36px 32px;text-align:left;">
              <h1 style="margin:0 0 12px;font-size:22px;color:#0f172a;line-height:1.15;font-weight:700;">Verify your email</h1>
              <p style="margin:0 0 20px;color:#475569;font-size:15px;line-height:1.5;">Hi ${user.name},<br />Thanks for creating an account with {{BRAND_NAME}}. Please verify your email address by clicking the button below — this helps keep your account secure.</p>

              <p style="margin:22px 0;text-align:center;">
                <a href="${url}" style="display:inline-block;padding:12px 20px;border-radius:8px;background:#2563eb;color:#ffffff;font-weight:600;text-decoration:none;font-size:15px;">Verify email</a>
              </p>

              <p style="margin:0 0 8px;color:#475569;font-size:13px;line-height:1.4;">If the button doesn't work, copy and paste the URL below into your browser:</p>
              <p style="word-break:break-all;font-size:13px;color:#334155;margin:0 0 14px;">${url}</p>

              <hr style="border:none;border-top:1px solid #eef2f7;margin:18px 0;" />

              <p style="margin:0;color:#6b7280;font-size:13px;line-height:1.5;">If you didn't create an account with {{BRAND_NAME}}, you can ignore this email or contact our support at <a href="mailto:{{SUPPORT_EMAIL}}" style="color:#2563eb;text-decoration:underline;">{{SUPPORT_EMAIL}}</a>.</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:18px 28px;background:#fbfdff;border-top:1px solid #eef2f7;color:#9aa3b2;font-size:12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="vertical-align:middle;">© {{YEAR}} {{BRAND_NAME}}. All rights reserved.</td>
                  <td style="text-align:right;vertical-align:middle;"><a href="{{UNSUBSCRIBE_LINK}}" style="color:#9aa3b2;text-decoration:underline;">Unsubscribe</a></td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </table>

</body>

        `,
        subject: 'email verification sample'

    })
};