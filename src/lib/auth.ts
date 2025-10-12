
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/database/drizzle";
import * as schema from '@/database/schema'
import { nextCookies } from "better-auth/next-js";
import { sendResetPasswordEmail } from "./email/sendResetPasswordEmail";
import { sendEmailVarification } from "./email/sendEmailVerification";
import { createAuthMiddleware } from 'better-auth/api'
import { sendWelcomeEmail } from "./email/sendWelcomeEmail";
import { sendTestMail } from './email/sendTestMail';
import { profile } from "console";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: { ...schema, user: schema.usersTable },
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: false,
        sendResetPassword: async ({ user, url }) => {
            await sendResetPasswordEmail({ user, url })
        }
    },
    emailVerification: {
        autoSignInAfterVerification: true,
        sendOnSignUp: true,
        sendVerificationEmail: async ({ user, url }) => {
            await sendEmailVarification({ user, url })
        },
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            mapProfileToUser: (profile) => {
                return {
                    role: 'user'
                }
            }
        },
    },
    plugins: [nextCookies()],
    hooks: {
        after: createAuthMiddleware(async (ctx) => {
            if (ctx.path.startsWith('/sign-up')) {
                const user = ctx.context.newSession?.user ?? { name: ctx.body.name, email: ctx.body.email };
                if (user != null) {
                    await sendWelcomeEmail({ user })
                }
            };

        })
    },
    // add fields
    user: {
        additionalFields: {
            role: {
                type: 'string',
                required: true,
            },
        }
    },
});