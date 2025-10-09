import { session } from './database/schemas/auth-schema';
// middleware.ts
import { arcjetMiddleware } from "@/middleware/arcjetMiddleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getServerSession } from './features/profile/profile-server';
import { auth } from './lib/auth';
import { headers } from 'next/headers';


const publicRoutes = ['/auth/sign-in', '/auth/sign-up'];
const privateRoutes = ['/profile', '/users', '/tasks', '/quotes'];

// GLOBAL MIDDLEWARE
export async function middleware(request: NextRequest) {

    const isPublicRoute = publicRoutes.some(r => request.nextUrl.pathname.startsWith(r));
    const isPrivateRoute = privateRoutes.some(r => request.nextUrl.pathname.startsWith(r));

    const session = await auth.api.getSession({ headers: await headers() })

    // const decision = await arcjetMiddleware(request);
    // if (decision?.isDenied()) {
    //     if (decision.reason.isRateLimit()) {
    //         return new NextResponse("Too Many Requests", { status: 429 });
    //     }
    //     if (decision.reason.isBot()) {
    //         return new NextResponse("Bot Detected", { status: 403 });
    //     }
    // };

    if (isPublicRoute && session) {
        return NextResponse.rewrite(new URL('/', request.nextUrl))
    };

    if (isPrivateRoute && !session) {
        return NextResponse.rewrite(new URL('/auth/sign-in', request.nextUrl))
    };

    if (isPrivateRoute && session && !session.user.emailVerified) {
        return NextResponse.redirect(new URL('/auth/email-verification', request.nextUrl))
    }


    return NextResponse.next();
}

export const config = {
    // matcher: ["/api/:path*"],
    // matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
