// middleware.ts
import { arcjetMiddleware } from "@/middleware/arcjetMiddleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

    const decision = await arcjetMiddleware(request);
    if (decision?.isDenied()) {
        if (decision.reason.isRateLimit()) {
            return new NextResponse("Too Many Requests", { status: 429 });
        }
        if (decision.reason.isBot()) {
            return new NextResponse("Bot Detected", { status: 403 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"],
};
