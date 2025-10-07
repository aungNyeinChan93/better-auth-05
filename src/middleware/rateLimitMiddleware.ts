import { auth } from "@/lib/auth"
import arcjet, { tokenBucket } from "@arcjet/next"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

const aj = arcjet({
    key: process.env.ARCJET_KEY!,
    rules: [
        // Create a token bucket rate limit. Other algorithms are supported.
        tokenBucket({
            mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
            characteristics: ["userId"], // track requests by a custom user ID
            refillRate: 5, // refill 5 tokens per interval
            interval: 10, // refill every 10 seconds
            capacity: 10, // bucket maximum capacity of 10 tokens
        }),
    ],
})


export async function rateLimitMiddleware(request: NextRequest) {
    const session = await auth.api.getSession({ headers: await headers() });

    const decision = await aj.protect(request, { requested: 1, userId: session?.user?.id! });

    if (decision.isDenied()) {
        return NextResponse.json(
            { error: "Too Many Requests", reason: decision.reason },
            { status: 429 },
        );
    }
    return NextResponse.next()
}   