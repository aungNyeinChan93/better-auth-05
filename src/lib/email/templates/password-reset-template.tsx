import React from "react";

interface PasswordResetEmailProps {
  brandName: string;
  logoUrl: string;
  userName: string;
  resetLink: string;
  supportEmail: string;
  unsubscribeLink: string;
  year?: string;
}

export function PasswordResetEmail({
  brandName,
  logoUrl,
  userName,
  resetLink,
  supportEmail,
  unsubscribeLink,
  year = new Date().getFullYear().toString(),
}: Partial<PasswordResetEmailProps>) {
  return (
    <div className="bg-gray-100 font-sans">
      <table className="w-full bg-gray-100 py-6">
        <tbody>
          <tr>
            <td className="text-center">
              <table className="w-[600px] max-w-[600px] bg-white rounded-xl shadow-md mx-auto">
                {/* Header */}
                <tbody>
                  <tr>
                    <td className="p-5 border-b border-gray-200 align-middle">
                      <div className="flex items-center gap-3">
                        <img
                          src={logoUrl}
                          alt={brandName}
                          className="w-10 h-10 rounded-md object-contain"
                        />
                        <span className="text-lg font-bold text-gray-900">
                          {brandName}
                        </span>
                      </div>
                    </td>
                  </tr>

                  {/* Body */}
                  <tr>
                    <td className="p-9 text-left">
                      <h1 className="text-2xl font-bold text-gray-900 mb-3">
                        Reset your password
                      </h1>
                      <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                        Hi {userName},<br />
                        We received a request to reset your password for your{" "}
                        {brandName} account. Click the button below to create a
                        new password.
                      </p>

                      <div className="my-6 text-center">
                        <a
                          href={`http://localhost:3000/${resetLink}`}
                          target="_self"
                          className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-[15px] hover:bg-blue-700"
                        >
                          Reset password
                        </a>
                      </div>

                      <p className="text-sm text-gray-600 mb-2">
                        If the button doesn’t work, copy and paste this link
                        into your browser:
                      </p>
                      <p className="break-all text-sm text-gray-700 mb-3">
                        {resetLink}
                      </p>

                      <hr className="border-t border-gray-200 my-5" />

                      <p className="text-sm text-gray-500 leading-relaxed">
                        If you didn’t request a password reset, you can safely
                        ignore this email. Your password will remain unchanged.
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed mt-3">
                        Need help? Contact us at{" "}
                        <a
                          href={`mailto:${supportEmail}`}
                          className="text-blue-600 underline"
                        >
                          {supportEmail}
                        </a>
                        .
                      </p>
                    </td>
                  </tr>

                  {/* Footer */}
                  <tr>
                    <td className="p-5 bg-gray-50 border-t border-gray-200 text-gray-400 text-xs">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <span>
                          © {year} {brandName}. All rights reserved.
                        </span>
                        <a
                          href={unsubscribeLink}
                          className="underline hover:text-gray-500"
                        >
                          Unsubscribe
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
