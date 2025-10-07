import { auth } from "@/lib/auth"; // path to your auth file
import { arcjetMiddleware } from "@/middleware/arcjetMiddleware";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";


const authHandler = toNextJsHandler(auth)

export const { GET } = authHandler;

export async function POST(request: NextRequest) {
    const cloneRequest = request.clone();

    const decision = await arcjetMiddleware(request) //for production

    // if (decision?.isDenied) {
    //     if (decision.reason.isEmail()) {
    //         if (decision.reason.emailTypes.includes('INVALID')) {
    //             return new NextResponse("Email field is invalid ", { status: 400 });
    //         }
    //         if (decision.reason.emailTypes.includes('DISPOSABLE')) {
    //             return new NextResponse(" DISPOSABLE email are not allowed ", { status: 400 });
    //         }
    //         if (decision.reason.emailTypes.includes('NO_MX_RECORDS')) {
    //             return new NextResponse(" NO_MX_RECORDS email are not allowed ", { status: 400 });
    //         }
    //         if (decision.reason.emailTypes.includes('NO_GRAVATAR')) {
    //             return new NextResponse("NO_GRAVATAR  email are not allowed ", { status: 400 });
    //         }
    //     };
    //     if (decision.reason.isRateLimit()) {
    //         return new NextResponse("Too Many Requests", { status: 429 });
    //     }
    //     if (decision.reason.isBot()) {
    //         return new NextResponse("Bot Detected !!!", { status: 403 });
    //     }
    // }

    return authHandler.POST(cloneRequest)
}
