import { db } from "@/database/drizzle";
import { arcjetMiddleware } from "@/middleware/arcjetMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const decision = await arcjetMiddleware(request)
        if (decision?.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return new NextResponse("Too Many Requests", { status: 429 });
            }
            if (decision.reason.isBot()) {
                return new NextResponse("Bot Detected", { status: 403 });
            }
        }
        const users = await db.query.usersTable.findMany();
        return NextResponse.json({ users })
    } catch (error) {
        return NextResponse.json({
            error: error instanceof Error ? error?.message : 'user data fail'
        })
    }
}