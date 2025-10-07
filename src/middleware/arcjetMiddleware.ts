import { auth } from '@/lib/auth';
import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers';
import { findIp } from '@arcjet/ip'
import { aj, botSettings, rateLimitSettings, emailSettings } from '@/lib/arcjet';
import { detectBot, protectSignup, slidingWindow } from '@arcjet/next';


export async function arcjetMiddleware(request: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: await headers() })
        const userIdOrIp = ((session?.user?.id ?? findIp(request))) || '127.0.0.1';

        if (request.nextUrl.pathname.endsWith('/api/auth/sign-up')) {
            const body = await request.json();

            return aj.withRule(protectSignup({
                bots: botSettings,
                email: emailSettings,
                rateLimit: rateLimitSettings
            })).protect(request, { userIdOrIp, email: body.email })
        }
        return aj.withRule(detectBot(botSettings)).withRule(slidingWindow(rateLimitSettings)).protect(request, { userIdOrIp })
    } catch (error) {
        console.log(error)
    }
}